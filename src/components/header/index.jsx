import { Timer, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import './styles.css';

export function Header() {
    const navigate = useNavigate(); // Definindo navigate

    const { user, logout } = useContext(AuthContext);

    function handleLogout() {
        if (!user) return;
        logout();
        navigate('/'); // Usando navigate corretamente
    }

    return (
        <header className="container--header">
            <img src="/Logo.png" alt="Logo tipo LAB Timer365" />
            <nav>
                <NavLink to="/home" end aria-label="Home">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/" end aria-label="Logout">
                    <LogOut size={24} onClick={handleLogout} />
                </NavLink>
            </nav>
        </header>
    );
}