import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                    <div class="footer-copyright mt-5 mb-0 text-center py-3 bg-dark text-white">
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