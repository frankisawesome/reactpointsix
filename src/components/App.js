import React from 'react';
import '../css/App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Header>Three Point Six</Card.Header>
        <Card.Body>
          <Card.Title>Leave your message, and see what's trending.</Card.Title>
          <Card.Text>
            Type in any message you want, and we will a
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
