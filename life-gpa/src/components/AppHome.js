import React from 'react';
import './AppHome.scss';
import biglifegpa from './styling/biglifegpa.svg'
const AppHome = () => {
    return ( 
        <div className="whole">
            <div> 
                <img className="mainlogo"  alt="LifeGPA logo" src={biglifegpa}></img> 
                <h2>Welcome to the new you!</h2>
            </div>
            <div className="homeButtons">
                <a href="/register" className="button1">Sign Up</a>
                <a href="/login" className="button2">Sign In</a>
            </div> 
        
        </div>
     );
}
 
export default AppHome;