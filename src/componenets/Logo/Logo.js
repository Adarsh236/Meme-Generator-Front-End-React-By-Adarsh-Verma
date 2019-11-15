import React from 'react';
import Tilt from 'react-tilt'
import logo from './logo.png'
import './Logo.css';



const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ easing:"cubic-bezier(.03,.98,.52,.99)",reverse:true,transition:true,speed:300,perspective:1000,max: 45 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                <img style={{paddingTop: '10px'}} alt ='logo' 
                src={logo}/> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;