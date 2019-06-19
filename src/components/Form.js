//React and hooks
import React, { useState } from 'react';

//Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


export function AppForm(props) {
    const [message, setMessage] = useState('');

    function messageChange(e) {
        setMessage(e.target.value)
    }

    function submitMessage() {

    }

    return (
        <Card.Body>
            <Card.Title>Leave your message, and see what's trending on Three Point Six.</Card.Title>
            <InputGroup>
                <FormControl
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon1"
                    value={message}
                    onChange={messageChange}
                />
            </InputGroup>
            <Button variant="primary" onClick = {submitMessage}>Submit</Button>
        </Card.Body>
    )
}