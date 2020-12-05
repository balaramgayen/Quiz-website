import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar color">
                <h2 className="text-white">Global Quiz</h2>
                <ul class="nav">
                    <li class="nav-item">
                        <Link class="nav-link text-white" to="/">Home</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;