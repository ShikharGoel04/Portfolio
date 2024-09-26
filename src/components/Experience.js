import React from 'react';
import {WorkExperience} from '../WorkExperienceData';
import TimelineItem from './TimelineItem';
export default function Experience(){

    return (
    <div style={{backgroundColor:'lightyellow',paddingBottom:'10%'}}><h1 className='heading'>Work Experience</h1>
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
