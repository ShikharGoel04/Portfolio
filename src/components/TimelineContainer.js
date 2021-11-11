import React from 'react';
import { timelineData} from '../TimelineData';
import TimelineItem from './TimelineItem';

export default function Timeline(){


     return ( 
         timelineData.length > 0 && (
        <div className="timeline-container">
            {console.log(timelineData)}
            {timelineData.map((data, idx) => (
               <TimelineItem data={data} key={idx} />
               
            ))}
        </div>)
       
    )
}