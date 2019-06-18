import React from 'react';
import '../css/App.css';
import Card from 'react-bootstrap/Card';
import {AppForm} from './Form'


function App() {
  
  return (
    <div className="App">
      <Card>
        <Card.Header>Three Point Six</Card.Header>
        <AppForm />
        <p>A little experimental MERN stack app by Frank Li and Sebastian Muir-Smith @ QUT, Brisbane</p>
      </Card>
    </div>
  );
}

export default App;
