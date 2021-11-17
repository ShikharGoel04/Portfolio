import React from 'react';
import coursera from '.././assets/coursera.png';
import GoogleCloud from '.././assets/GoogleCloud.png';
import hackerrank from '.././assets/hackerrank.png';

export default function Certification(){

    return (
    <div style={{backgroundColor:'lightyellow',paddingBottom:'10%'}}>
        <h1 style={{color:'darkslateblue',marginLeft:'10%'}}>Certification</h1>

        <img style={{marginLeft:'-4%'}} src={GoogleCloud} height="20%" width="25%"/> <h4 style={{marginLeft:'18%',marginTop:'-10%',color:'darkblue'}}>  November,2021 - Google Cloud Certified - Associate Cloud Engineer
       Issuing Organization - Google Cloud</h4><h4 style={{marginLeft:'18%',marginTop:'-3%',color:'darkgoldenrod'}}>Issuing Organization - Google Cloud</h4>

       <img style={{marginLeft:'2%'}} src={hackerrank} height="80" width="80"/>  <h4 style={{marginLeft:'18%',marginTop:'-10%',color:'darkblue'}}>March,2021 - JavaScript(Basic)</h4>
       <h4 style={{marginLeft:'18%',marginTop:'-3%',color:'darkgoldenrod'}}>Issuing Organization - Hackerrank</h4>

       <img style={{marginLeft:'2%'}} src={coursera} height="80" width="80"/> <h4 style={{marginLeft:'18%',marginTop:'-10%',color:'darkblue'}}>August,2020  - Developing APIs with Google Cloud's 
Apigee API Platform Specialization</h4>
<h4 style={{marginLeft:'18%',marginTop:'-3%',color:'darkgoldenrod'}}>Issuing Organization - Coursera</h4>

       

     
    
    
    
    </div>)

}