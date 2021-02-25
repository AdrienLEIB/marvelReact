import React, { Component, useState } from 'react';
import styled from 'styled-components';
import axios from "axios"
import {useHistory} from 'react-router-dom'; 

const Loginform = ({submit}) => {

    // const [ username, setUsername ] = useState("");
    // const [password, setPassword ] = useState("");
    const [formState, setFormState] = useState({username: "", password: ""});
    const history = useHistory();
    const [errMessage, setErrMessage] = useState('');


    return  (
        <StyledFrom onSubmit={(e) => submit(e, formState, setErrMessage, history)}>
            <StyledSpan> Formulaire pour devenir un AVENGERS</StyledSpan>
            <SignInput placeholder="username" onChange={e => setFormState({...formState, username:e.target.value})} type="text"></SignInput>
            <SignInput  placeholder="password" onChange={e => setFormState({...formState, password:e.target.value})} type="password"></SignInput>
            <SignInput  type="submit"></SignInput>
            <StyledSpan>{errMessage}</StyledSpan>
        </StyledFrom>
    )
}

const StyledSpan = styled.form`
    margin-top: 12px;
    margin-bottom: 12px;
`


const StyledFrom = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SignInput = styled.input`
    margin-bottom: 6px;
    border-radius: 10px;
    padding: 6px 0px;
`

export default Loginform;