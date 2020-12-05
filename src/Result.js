import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Result extends Component {
    state = {  }

    massage(){
        if (this.props.location.state.marks >= 2) {
            return <h1>Congrats</h1>
        } else {
            return <h1>Better luck next time</h1>
        }
    }
    render() { 
        console.log(this.props);
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mt-4 text-center">
                        <div className="card">
                            <div className="card-body">
                                <div>{this.massage()}</div>
                                <h2>You scored {this.props.location.state.marks} marks out of 30</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 my-5"> 
                    <div className="col-12 text-center mt-4">
                    <Link to="/" className="btn-info btn btn-outline-primary text-white"><h3 className="text-center">Back to home</h3></Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Result;