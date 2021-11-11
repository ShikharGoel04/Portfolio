import React from 'react';

export default function TimelineItem({data}){
    return (
        <div className="timeline-item">
        <div className="timeline-item-content">
          
            <time>{data.date}</time>
            {data.designation && <h4 style={{paddingTop:'-10%'}}>{data.designation}</h4>}
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
    )
  

}