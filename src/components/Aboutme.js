import React from 'react';
import Header from './Header';
import { Card } from 'react-bootstrap';
export default function About()
{

    return (<>
    <Header/>
    <div style={{marginTop:'5%',marginLeft:'30%'}}>

    <Card style={{display:'flex', width: '30rem', height:'30rem', border:'1px solid black'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title><h1>Shikhar Goel</h1></Card.Title>
    <Card.Text>
    Hi, I am Shikhar Goel.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
    
    </>)
}