import React, { Component } from 'react';

import Navigation from './componenets/Navigation/Navigation';
import SignIn from './componenets/SignIn/SignIn';
import Register from './componenets/Register/Register';
import Logo from './componenets/Logo/Logo';
import ImageLink from './componenets/ImageLink/ImageLink';
import Rank from './componenets/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';



const particalsOptions = {
             particles: {
                number: {
                    value: 60, density:{enable: true, value_area:800}
                },
                size: {
                    value: 30
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                }
            }
        }







	
 
class App extends Component{
    constructor(){
        super();
        this.state={
            route: 'signin',
            isSignedIn: false
        }
    }
  
onRouteChange=(route)=>{
    if (route === 'signout') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      }
    this.setState({route: route});
}

    render() {
        const {isSignedIn, route} = this.state;
        return (
            <div className="App">
             <Particles className="particles"
                params={particalsOptions}/>

             
               < Navigation  isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
               {route === 'home'?
                  <div>
                  < Logo />
                  <Rank />
                  < ImageLink />
                 </div>
               :(
                   this.state.route === 'signin'?
                   <SignIn onRouteChange={this.onRouteChange}/> : <Register onRouteChange={this.onRouteChange}/>
               )}
               
               </div>
    )
  }
}

export default App;
