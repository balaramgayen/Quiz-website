import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                    <div class="bg-dark text-white footer-copyright text-center">
                        2020 © Copyright :
                        all rights reserved<br></br>
                        Design & Developed By <a href="https://balaramgayen.blogspot.com/" target="blank">Balaram Gayen</a><br></br>
                        Made with <span style={{color: "#e25555"}}>&hearts;</span>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;