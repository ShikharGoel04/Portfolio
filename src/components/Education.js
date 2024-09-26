import React from 'react';
import dps from '.././assets/dps.png';
import ip from '.././assets/ip.png';
import DU from '.././assets/DU.png';
export default function Education(){
return (<div style={{backgroundColor:'lightyellow',paddingBottom:'10%'}} >
    
    
    <h1 className='heading'>Educational Qualifications</h1>
    
    <img style={{marginLeft:'2%'}} src={ip} height="10%" width="30%"/>   <h4 style={{marginLeft:'35%',marginTop:'-10%',color:'darkblue'}}>Masters in Computer Science from USICT, GGSIPU in Delhi.</h4>
    
    <img style={{marginLeft:'2%',marginTop:'5%',marginBottom:'8%'}} src={DU} height="5%" width="20%"/>   <h4 style={{marginLeft:'35%',marginTop:'-21%',color:'darkblue'}}>Bachelors in Computer Science from Ramanujan College, Delhi University.</h4>
    <img style={{marginLeft:'5%',marginTop:'3%',marginBottom:'9%'}} src={dps} height="5%" width="20%"/> <h4 style={{marginLeft:'35%',marginTop:'-25%',color:'darkblue'}}>Intermediate from Delhi Public School, Kanpur</h4>
    




</div>)

}