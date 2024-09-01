import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/button";
import Input from "../../components/input";

import './login.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação, como chamar uma API
        console.log('Email:', email);
        console.log('Password:', password);

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
