import React, { Component } from 'react'
import Navigation from './componenets/Navigation/Navigation'
import Logo from './componenets/Logo/Logo'
import ImageLink from './componenets/ImageLink/ImageLink'
import Rank from './componenets/Rank/Rank'
import './App.css'
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
  
    render() {
        return (
            <div className="App">
            <Particles className="particles"
                params={particalsOptions}/>

               < Navigation />
               < Logo />
               <Rank />
               < ImageLink />
               
               {}
               </div>
    )
  }
}

export default App;
