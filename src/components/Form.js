import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export function AppForm(props) {
    return (
        <Card.Body>
            <Card.Title>Leave your message, and see what's trending on Three Point Six.</Card.Title>
            <InputGroup>
                <FormControl
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <Button variant="primary">Submit</Button>
        </Card.Body>
    )
}