import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
    
    
        <div className="home">
            <div className="content">
                <h2>Hi, I'm Ishmael John-Lewis,</h2>
                <h1> Front-End Developer.</h1>
                <span></span>
                <span></span>
                
               <button type="button" ><a className ="contact" href="./Contacts">Contact Me </a> </button>
        </div>
        </div>
        
 
    );
}

export default Home;