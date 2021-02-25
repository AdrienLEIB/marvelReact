import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return  (
        <div>
            <p> Home </p>
            <Link to='/'> To Login </Link>
        </div>
    );
}


export default Home;