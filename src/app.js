import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import { Route} from 'react-router-dom';
import Footer from './footer';
import Home from './Home';
import Navbar from './Navbar';
import Result from './Result';
import Test from './Test';

class App extends Component {
    state = {  };

    render() { 
        
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route path='/' component={Home} exact></Route>
                    <Route path='/test/:id' component={Test}></Route>
                    <Route path='/result' component={Result}></Route>
                </Switch>
                <Footer/>
            </div>
            
        )
    }
}
 
export default App;