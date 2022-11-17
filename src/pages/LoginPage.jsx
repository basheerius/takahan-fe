import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import firebase from "../firebase/firebase";

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (<div style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: "column",
        padding: '3vw',
        boxSizing: 'border-box',
        overflowY: 'scroll',
        gap: '2vw',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <span>Login Or Register</span>
        <TextField sx={{width: '100%'}} label="username" type="email" onChange={e => setUsername(e.target.value)} />
        <TextField sx={{width: '100%'}} label="password" type="password" onChange={e => setPassword(e.target.value)} />
        <Button onClick={() => firebase.login(username, password)}>Login</Button>
        <Button onClick={() => firebase.register(username, password)}>Register</Button>
    </div>)
}

export default HomePage;
