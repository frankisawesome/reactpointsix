import React from 'react';
import '../css/App.css';
import Card from 'react-bootstrap/Card';
import { AppForm } from './Form';
import { Result } from './Result'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  const [render, setRender] = useState('form');
  const [loading, setLoading] = useState(false);
  

  return (
    <Router>
      <div className="App">
        <Card>
          <Card.Header>Three Point Six</Card.Header>
          <Route path="/" exact component={AppForm} />
          <Route path="/results" component={Result} />
          <p>A little experimental MERN stack app by Frank Li and Sebastian Muir-Smith @ QUT, Brisbane</p>
        </Card>
      </div>
    </Router>
  );
}

export default App;
