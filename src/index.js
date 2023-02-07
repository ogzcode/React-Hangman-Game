import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GameStateProvider from './hooks/useGameState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GameStateProvider>
        <App />
    </GameStateProvider>
);
