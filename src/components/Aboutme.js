import React from 'react';
import { Card } from 'react-bootstrap';
export default function About()
{

    return (<>
   
   
    <div style={{marginLeft:'30%'}}>
    <h1 style={{color:'red'}}>About me</h1>
    <Card  style={{display:'flex', width: '70%', height:'180%', border:'1px solid black'}} >
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