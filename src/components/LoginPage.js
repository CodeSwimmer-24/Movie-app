import { Button, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react';
import "./Login.css"
import { userContext } from '../App';
import { Link, useHistory } from "react-router-dom";

function LoginPage() {
    const {state, dispatch} = useContext(userContext);

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/user/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               email,
               password, 
            }),
        });
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("Please enter the valid email and password");
        }
        if(res.status === 200){
            dispatch({type:"ADMIN",payload:true});
            window.alert("Admin Login Sucessfull");
            history.push("/admin");
        } 
        else {
            dispatch({ type: "USER", payload: true });
            window.alert("Login Sucessfull");
            history.push("/home");
        }
    }

    return (
        <div className="login__container">
           <h1>Login</h1>
           <TextField  id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Id"
            name="email"
            type="email"
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth />
           <TextField   id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            name="password"
            type="password"
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth/>
           <Button type="submit" 
           id="login" fullWidth 
           variant="contained" 
           color="primary" style={{ marginTop: "1rem" }}  
           onClick={loginUser}> Login </Button>
        </div>
    )
}

export default LoginPage
