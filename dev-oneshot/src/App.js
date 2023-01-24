import React from 'react';
import './App.css';
import Container from './container';
import jsondata from './data.json';



function App() {
    return (
        <div className="App">
        <Container data={jsondata}/>
        </div>
    );
}

export default App;
