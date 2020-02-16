import React from 'react';
import logo from './logo.svg';
import './App.css';

const images = ['1.jpg', '2.jpg', '3.jpg']


class Config extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <p>Size of Set</p>
                <input 
                    type="number" 
                    min="1" 
                    max="50" 
                    defaultValue="10"
                />

                <p>Select Set</p>
                <select>
                    <option>Set 1 (1-10)</option>
                    <option>Set 2 (11-20)</option>
                    <option>Set 3 (21-30)</option>
                </select>

                <p>Speed</p>
                <select>
                    <option>Slow (2 sec)</option>
                    <option>Slow (1 sec)</option>
                    <option>Slow (0.5 sec)</option>
                </select>
            </>
        );
    }
}

class Picture extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <img alt="Picture"/>
            </>
        );
    }
}

class Controls extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <button>Play</button>
                <button>Stop</button>
                <button>Show all</button>
            </>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Config />
                <Picture />
                <Controls />
            </>
        );
    }
}


function App() {
    const folderContext = require.context('./images', true)

    return (
        <>
            <Game />
        </>
    );
}

export default App;
