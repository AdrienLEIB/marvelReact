import React, { useEffect } from 'react';
import Logo from '../component/logo'
import Loginform from '../component/loginForm'
import axios from "axios"

const submit = (e, formState, setErrMessage, history, setIsToken) =>{
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
        localStorage.setItem('token', res.headers["x-access-token"])
        setIsToken(res.headers["x-access-token"])
        history.push('/characters');
    }).catch(err => {
        console.log(err);
        setErrMessage('Une erreur est survunue revenez plus tard');
    })
}

const Login = ({setIsToken, history}) => {
    useEffect(()=> {
         const token = localStorage.getItem('token');
         console.log("Login => token", token);
         
         if (token){
            history.push('/characters')
        }
    },[] );

    return  (
        <div>
            <Logo/>
            <Loginform submit={submit} setIsToken={setIsToken} />
        </div>
    );
}


export default Login;