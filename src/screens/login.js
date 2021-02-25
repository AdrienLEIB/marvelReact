import React, { Component, useState } from 'react';
import Logo from '../component/logo'
import Loginform from '../component/loginForm'
import axios from "axios"

const submit = (e, formState, setErrMessage, history) =>{
    e.preventDefault();
    if (!formState.username || !formState.password){
        setErrMessage("Les champs ne doivent pas être vide")
        return 
    }
    console.log(e.target);
    axios({
        method: "POST",
        url:"https://easy-login-api.herokuapp.com/users/login",
        data: {
            username: formState.username,
            password: formState.password
        }
    
    }).then(res =>{
        console.log(res.headers["x-access-token"])
        localStorage.setItem('token', res.headers["x-access-token"])
        history.push('/home');
    }).catch(err => {
        console.log(err);
        setErrMessage('Une erreur est survunue revenez plus tard');
    })
}

const Login = props => {
    // useEffect( () => {
    //      const token = localStorage.getItem('token');
    //      console.log("Login => token", token);

    // }, [])
    return  (
        <div>
            <Logo/>
            <Loginform submit={submit} />
        </div>
    );
}


export default Login;