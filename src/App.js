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
            isSignedIn: false,
            user:{
            id:'',
            name:'',
            email:'',
            entries:0,
            joined:''
            }
        }
    }loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        }})
    }
  

componentDidMount(){
    fetch('http://localhost:5500/')
    .then(response => response.json())
    .then(console.log)
}


onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    
     /* .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        
      })
      .catch(err => console.log(err));*/
  }


    ///////////
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
                  <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                  < ImageLink />
                 </div>
               :(
                   this.state.route === 'signin'?
                   <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> : <Register loadUser={this.loadUser}onRouteChange={this.onRouteChange}/>
               )}
               
               </div>
    )
  }
}

export default App;
