import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {List} from './List';

export function Result(props){
    function back(){
        props.setRender('form')
    }

    return(
        <Card.Body>
            {(props.err) ? props.err.toString() : null}
            <List data = {props.data}/>
            <Button variant="primary" onClick = {back}>Back</Button>
        </Card.Body>
    )
}