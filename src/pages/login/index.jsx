import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/button";
import Input from "../../components/input";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import './login.css';

function LoginPage() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

        login(email, password);

        if(email === 'admin' && password === '1234') {
            navigate('/home');
        } 
    };

    return (
        <div className="container--login">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
}

export default LoginPage;
