// Timer.js
import { useState, useEffect } from 'react';
import Button from '../button';
import './timer.css';

function Timer({ initialTime }) {
    const [time, setTime] = useState(initialTime);
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }

        return () => clearInterval(interval);
    }, [isRunning, time]);

    useEffect(() => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;

        setMinutes(String(mins).padStart(2, '0'));
        setSeconds(String(secs).padStart(2, '0'));
    }, [time]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    return (
        <>
        <div className="container--timer">
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <div className="separator--timer">:</div>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </div>
        <Button onClick={handleStartStop}>
                {isRunning ? 'Parar' : 'Iniciar'}
            </Button>
        </>
    );
}

export default Timer;
