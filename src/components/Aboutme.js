import React from 'react';
import { Card } from 'react-bootstrap';
import PHOTO from '../assets/PHOTO.jpg';

export default function About()
{

    return (<>
   <div style={{backgroundColor:'ThreeDDarkShadow',paddingBottom:'10%'}}>
  
    <Card  style={{width: '70%',marginLeft:'10%',paddingTop:'5%', height:'250%'}} >
  <Card.Img variant="top" src={PHOTO} width="30%"/>
  <Card.Body>
    <Card.Title><h1>Shikhar Goel</h1></Card.Title>
    <Card.Text>
    <h4 style={{color:'black'}}>Hi, I am Shikhar Goel. I am currently working as a Software Engineer at MediaAgility. I have experience of working with APIGEE API Management as well as front-end development.
      I have some experience and knowledge of working with backend technologies like Java and NodeJS.
    Apart from my technical skills, I love to play guitar and workout.  
     </h4>
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
    
    </>)
}