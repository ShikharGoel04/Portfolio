import React from 'react';
import { Card } from 'react-bootstrap';
import PHOTO from '../assets/PHOTO.jpg';

export default function About()
{

    return (<>
   <div style={{backgroundColor:'lightskyblue',paddingBottom:'10%'}}>
  
    <Card  style={{width: '70%',marginLeft:'10%',paddingTop:'5%', height:'250%'}} >
  <Card.Img variant="top" src={PHOTO} width="30%"/>
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