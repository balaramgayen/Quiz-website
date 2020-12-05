import React, { Component } from 'react';
import Card from './Card';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-12">
                    <div><h1><b>Game Rules:-</b></h1></div>
                    <div><p>1: There is a total of 9 sections given below every section has <b>10 questions</b>.</p></div>
                    <p>2: You have to attempt <b>10 questions under 5 minutes</b>.</p>
                    <p>3: Each question have <b>3 marks for the correct answer</b> and <b>-1 marks for the wrong answer</b>.</p>
                    <p>4: You can submit your answers manually by clicking the <b>submit button</b> after completion, otherwise when time is over answer will be submitted automatically.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <h2>Available Tests</h2>
                    <h5>Let's start the quiz by clicking the <b>start</b> button given below</h5>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6 col-md-4">
                        <Card name="G.K" id="9" image="https://data-flair.training/blogs/wp-content/uploads/sites/2/2020/08/general-knowledge-questions-with-answers-1200x900.jpg"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="Books" id="10" image="https://assets.entrepreneur.com/content/3x2/2000/20150729211514-man-reading-book-hipster.jpeg"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="Computer" id="18" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTiVWKe8FzZjm535pFolDZOOjxGvUL5iSSyZNcyr6na0dJhsRQHsAnvgeAALEYKGNYAl0paKcVmiiTFYZGBpTtSaIxA6CCO6trA&usqp=CAU&ec=45732302"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="Sports" id="21" image="https://media.gettyimages.com/photos/sports-balls-on-the-field-with-yard-line-soccer-ball-american-and-picture-id942206100?s=612x612"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="Science" id="17" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPQ84MqsU3jP2LmBW4o-liiF03tAmpBPatQ&usqp=CAU"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="History" id="23" image="https://cdn5.newsnationtv.com/images/2020/01/04/history-13.jpg"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="Math" id="19" image="https://i.ytimg.com/vi/Kp2bYWRQylk/maxresdefault.jpg"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="Geography" id="22" image="https://thumbs-prod.si-cdn.com/PbpFbILQIO1_VMrwhVWAh3Dafa8=/720x420/https://public-media.si-cdn.com/filer/80/c1/80c10399-3084-4815-84fb-b0ff3896b350/smola_norway-social.jpg"/>
                    </div>

                    <div className="col-6 col-md-4">
                        <Card name="Animals" id="27" image="https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/cheetah-mom-cubs.adapt.470.1.jpg"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;