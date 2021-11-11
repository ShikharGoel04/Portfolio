import React from 'react';
import {WorkExperience} from '../WorkExperienceData';
import TimelineItem from './TimelineItem';
export default function Experience(){

    return (
    <div style={{backgroundColor:'darkkhaki',paddingBottom:'10%'}}><h1 style={{color:'darkslateblue',marginLeft:'10%'}}>Work Experience</h1>
    {WorkExperience.length > 0 && (
        <div className="timeline-container" style={{paddingLeft:'10%'}}>
            {WorkExperience.map((data, idx) => (
               <TimelineItem data={data} key={idx} />
            
            ))}
        </div>
    )}
            </div>
            
            
    )                 

}
