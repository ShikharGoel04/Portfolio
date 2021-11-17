import React from 'react';
import dps from '.././assets/dps.png';
import ip from '.././assets/ip.png';
import DU from '.././assets/DU.png';
export default function Education(){
return (<div style={{backgroundColor:'lightsalmon',paddingBottom:'10%'}} >
    
    
    <h1 style={{color:'darkslateblue',marginLeft:'10%'}}>Educational Qualifications</h1>
    
    <img style={{marginLeft:'2%'}} src={ip} height="10%" width="30%"/>   <h4 style={{marginLeft:'35%',marginTop:'-10%',color:'darkmagenta'}}>Masters in Computer Science from USICT, GGSIPU in Delhi.</h4>
    
    <img style={{marginLeft:'2%',marginTop:'5%',marginBottom:'8%'}} src={DU} height="5%" width="20%"/>   <h4 style={{marginLeft:'35%',marginTop:'-15%',color:'darkmagenta'}}>Bachelors in Computer Science from Ramanujan College, Delhi University.</h4>
    <img style={{marginLeft:'5%',marginTop:'3%',marginBottom:'9%'}} src={dps} height="5%" width="20%"/> <h4 style={{marginLeft:'35%',marginTop:'-25%',color:'darkmagenta'}}>Intermediate from Delhi Public School, Kanpur</h4>
    




</div>)

}