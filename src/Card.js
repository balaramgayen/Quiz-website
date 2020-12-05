import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    state = {  }
    render() { 
        return ( <div class="card mt-2" style={{width: "100%"}}>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.name}</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <img src={this.props.image} class="card-img-top" alt="image_was_here"></img>
                        <Link to={'/test/' + this.props.id} className="btn btn-primary card-link mt-1" href="#">Start</Link>
                    </div>
                </div> );
    }
}
 
export default Card;