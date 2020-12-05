import React, { Component } from 'react';

class Radio extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <input onChange={() => this.props.handleClick(this.props.index,this.props.name)} checked={this.props.checked} type='radio' name="x"></input> {this.props.name}
            </div>
            
         );
    }
}
 
export default Radio;