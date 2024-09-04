// HomePage.js
import { useState } from "react";
import Timer from "../../components/timer";
import Button from "../../components/button";
import './home.css';

function HomePage() {
    const [showTimer, setShowTimer] = useState(true);
    const [initialTime, setInitialTime] = useState(300); // Exemplo: 5 minutos (300 segundos)

    const handleStartTimer = () => {
        setShowTimer(true);
    };

    return (
        <div className="container--home">
            <h1>Temporizador</h1>
            {showTimer && <Timer initialTime={initialTime} />}
        </div>
    );
}

export default HomePage;
