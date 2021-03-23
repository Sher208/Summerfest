import React, { Fragment } from 'react';

const EventItem = ({name, desc}) => {
    return (
        <div className="event">
            <h1  className="text-center pg-bottom">{name}</h1>
            <p className="text-center">
                {desc}
            </p>
        </div> 
    )
}

export default EventItem;