import React from 'react';

const EventItem = ({name, desc, clickModal}) => {
    return (
        <div className="event" onClick={clickModal}>
            <h1  className="text-center pg-bottom">{name}</h1>
            <p className="text-center">
                {desc}
            </p>
        </div> 
    )
}

export default EventItem;