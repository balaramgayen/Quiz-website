import React, { Component } from 'react';

class Timer extends Component {

    constructor(props){
        super(props);
        this.state = { 
            counter:this.props.secs
        }

    }

    componentDidMount(){
        let x = setInterval(() => {
            if(this.state.counter > 0){
                this.setState({counter:this.state.counter - 1});
            }else{
                clearInterval(x);
                this.props.onTimeComplete();
            }
            
        },1000);
    }
    render() { 
        return ( 
        <h1 className="display-3 text-center">{Math.floor(this.state.counter/60)} mins {this.state.counter%60} secs</h1>
         );
    }
}
 
export default Timer;