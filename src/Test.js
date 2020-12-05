import React, { Component } from 'react';
import axios from 'axios';
import Timer from './Timer';
import Radio from './Radio';


class Test extends Component {
    state = { 
        questions:[],
        options:[],
        correct:[],
        answers:[],
        index:0
     }

    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous=this.previous.bind(this);
    }

    next(){
        this.setState({questions:this.state.questions,index:this.state.index + 1});
    }

    previous(){
        this.setState({questions:this.state.questions,index:this.state.index - 1});
    }

    grid(index){
        this.setState({questions:this.state.questions,index:index});
    }


    returnOptions(){

        if(this.state.questions.length !== 0){
            return this.state.options[this.state.index].map((item) => {
                return <div><h5><Radio index={this.state.index} handleClick={this.handleClick.bind(this)} checked={this.state.answers[this.state.index] === item} name={item}/></h5></div>
            })
        }
    }

    handleClick(questionIndex,name){
        
        // 2. update the answers wala array
        let updatedAnswers = this.state.answers.map(function(item,index){

            if(index === questionIndex){
                return name;
            }else{
                return item;
            }

        })

        this.setState({answers:updatedAnswers});
        // 1. Turn the radio btn blue
    }

    fillState(response){
        let questions = [];
        let options = [];
        let correct = [];
        let answers = [];

        response.data.results.map((item) => {
            questions.push(item.question);
            answers.push("");
            correct.push(item.correct_answer);
            let temp = [];

            item.incorrect_answers.map((option) => {
                temp.push(option);
                
            });

            temp.push(item.correct_answer);

            options.push(temp);
        });

        this.setState({questions:questions,options:options,correct:correct,answers:answers,index:0});

    }

    shouldDisplayPrevious(){
        if(this.state.index !== 0){
            return <button onClick={this.previous} className="btn btn-info">Previous</button>;
        }
    }

    shouldDisplayNext(){
        if(this.state.index == this.state.questions.length -1){
            return <button onClick={this.submit.bind(this)} className="btn btn-danger btn-lg">Submit</button>;
        }else{
            return <button onClick={this.next} className="btn btn-info">Next</button>;
        }
    }

    evaluate(){
        let marks = 0;
        for(let i=0; i<this.state.answers.length-1; i++){
            if(this.state.answers[i] !== ""){
                if(this.state.correct[i] === this.state.answers[i]){
                    marks+=3;
                }else{
                    marks-=1;
                }
            }
            
        }

        return marks;
    }

    submit(){
        let marks = this.evaluate();
        //console.log(marks);
        this.props.history.push({
            pathname:'/result',
            state:{marks:marks}
        });
    }

    onTimeComplete(){
        let marks = this.evaluate();
        this.props.history.push({
            pathname:'/result',
            state:{marks:marks}
        });
    }

    

    

    componentDidMount(){
        let categoryId = this.props.match.params.id;
        
        // hit the api
        axios
        .get('https://opentdb.com/api.php?amount=10&category=' + categoryId +'&difficulty=easy&type=multiple')
        .then((response) => {
            this.fillState(response);
        })
        .catch((error) => console.log(error))
    }
    render() {
        console.log(this.state.answers); 
        return ( 
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <Timer onTimeComplete={this.onTimeComplete.bind(this)} secs={300}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 mt-3">
                        <div style={{minHeight:400}}>
                            <h2 className="mb-3">{this.state.index + 1}. {this.state.questions[this.state.index]}</h2>

                            {
                                this.returnOptions()
                            }
                        </div>
                    

                        <div className="mt-5">
                            <span>
                                {
                                    this.shouldDisplayPrevious()
                                }
                            </span>
                            <span className="float-right">
                                {
                                    this.shouldDisplayNext()
                                }
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Test;