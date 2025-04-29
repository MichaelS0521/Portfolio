import './App.css';
import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="bg">
      <header className="App-header">
        <h1>Hello, I'm Michael</h1>
        <p>Java, JavaScript, html, css, React</p>
        <Button title="" onClick={() => alert("Button Clicked!")}/>
      </header>
    </div>
  );
}

export default App;
