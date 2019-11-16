import React, { Component } from 'react';
import Navigation from './componenets/Navigation/Navigation';
import Signin from './componenets/Signin/Signin';
import Register from './componenets/Register/Register';
import Logo from './componenets/Logo/Logo';
import ImageLink from './componenets/ImageLink/ImageLink';
import Rank from './componenets/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';
import cloudinary from 'cloudinary-core';
import Preview from './componenets/Preview/Preview';



const particalsOptions = {
    particles: {
        number: {
            value: 60, density: { enable: true, value_area: 800 }
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






const initialState = {
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    },
    topText: '',
    bottomText: '',
    stage: 'UPD',
    preview: '',
    memeReady: false,
    pending: false
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

                                                      //////////               1
        // Cloudinary instance
        this.cl = cloudinary.Cloudinary.new({ cloud_name: 'christekh' })
        this.uploadWidget = window.cloudinary.createUploadWidget(
            { cloud_name: 'christekh', upload_preset: 'idcidr0h' },
            (error, [data]) => {
                // Transform returned image
                const previewUrl = this.cl.url(data.secure_url, {
                    transformation: [this.defaultTransformation().general]
                })
                this.setState({ preview: previewUrl, stage: 'PVR' })
            }
        )
        // rebind context///////////                            /////            2
        this.initiateUpload = this.initiateUpload.bind(this);
        this.transformToMeme = this.transformToMeme.bind(this);
        this.handleTopTextChange = this.handleTopTextChange.bind(this);
        this.handleBottomTextChange = this.handleBottomTextChange.bind(this);
        this.makeMeme = this.makeMeme.bind(this);
        this.reset = this.reset.bind(this);
    }

    // /**//////                                                    */           3
    // Set all state values
    // to defaults
    reset() {
        this.setState({
            topText: '',
            bottomText: '',
            stage: 'DND',
            preview: '',
            memeReady: false,
            pending: false
        });
    }

    // 1. Meme's top text
    handleTopTextChange(event) {
        const { value } = event.target;
        this.setState({ topText: value });
    }

    // 2. Mem's bottom text
    handleBottomTextChange(event) {
        const { value } = event.target;
        this.setState({ bottomText: value });
    }

    // Convert image in preview to Meme
    transformToMeme(id, isFetch) {
        const trans = this.defaultTransformation();
        const imageURL = this.cl.url(id, {
            type: 'fetch',
            transformation: [
                trans.general,
                {
                    overlay: `text:impact.ttf_55_stroke_center_line_spacing_-10:${encodeURIComponent(
                        this.state.topText
                    )}`,
                    ...trans.textGeneral,
                    ...trans.textTop
                },
                {
                    overlay: `text:impact.ttf_55_stroke_center_line_spacing_-10:${encodeURIComponent(
                        this.state.bottomText
                    )}`,
                    ...trans.textGeneral,
                    ...trans.textBottom
                }
            ]
        });
        this.setState({ stage: 'PVR', preview: imageURL, memeReady: true });
    }

    // [Event handler]
    // Call the transformer to generate
    // a meme
    // makeMeme() {
    //   this.transformToMeme(this.state.preview);
    //  }
    defaultTransformation() {
        return {
            general: { width: 500, height: 500, crop: 'pad', background: 'black' },
            textTop: { gravity: 'north' },
            textBottom: { gravity: 'south' },
            textGeneral: {
                color: 'white',
                border: { width: 5, color: 'black' },
                gravity: 'south',
                y: 10,
                width: 480,
                crop: 'fit'
            }
        }
    }
    initiateUpload() {
        this.uploadWidget.open()
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////running
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined
            }
        })
    }

    /*componentDidMount(){///////////////////
        fetch('http://localhost:5505/').then(response => response.json())
        .then(console.log)
    }*/

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    }

    /*onButtonSubmit = () => {
            fetch('http://localhost:5505/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
             
          }*/

    makeMeme = () => {
        this.transformToMeme(this.state.preview);
        fetch('http://localhost:5505/image', {
            method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: this.state.user.id })
        }).then(response => response.json()).then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }))/*;
                  console.log(count[0])*/}
        )
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({ isSignedIn: false })
        } else if (route === 'home') {
            this.setState({ isSignedIn: true })
        }
        this.setState({ route: route });
    }

    render() {
        const { isSignedIn, route } = this.state;
        const { stage } = this.state;
        return (
            <div className="App">
                <Particles className="particles" params={particalsOptions} />
                < Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                {route === 'home' ?
                    <div>
                        < Logo />
                        <Rank name={this.state.user.name} entries={this.state.user.entries} />
                        <div>
                            <div className="container1">
                                <div className="meme-app columns">
                                    <ImageLink onInputChange={this.onInputChange}
                                        //makeMeme={this.makeMeme}
                                        topText={this.state.topText}
                                        bottomText={this.state.bottomText}
                                        handleTopTextChange={this.handleTopTextChange}
                                        handleBottomTextChange={this.handleBottomTextChange}
                                        makeMeme={this.makeMeme}
                                        stage={this.state.stage}
                                        memeReady={this.state.memeReady}
                                        preview={this.state.preview}
                                        reset={this.reset}
                                    />
                                    <div className="meme-box column">
                                        {stage !== 'PVR' ? (
                                            <button
                                                onClick={this.initiateUpload}
                                                className="button is-info is-margin-top"
                                            >
                                                Upload
       </button>
                                        ) : (
                                                <Preview preview={this.state.preview} />
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mainImageLoading"
                                style={{ display: this.state.pending ? 'block' : 'none' }}
                            />
                        </div>
                    </div>
                    : (
                        this.state.route === 'signin' ?
                            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    )}
            </div>
        );
    }
}

export default App;
