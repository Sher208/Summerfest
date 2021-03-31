import React from 'react';
import {Link} from 'react-router-dom';

const EventItem = ({name, desc, clickModal, id}) => {
    return (
        <Link to={`/competition/${id}`} className="event" onClick={clickModal}>
            <h1  className="text-center pg-bottom">{name}</h1>
            <p className="text-center">
                {desc}
            </p>
        </Link> 
    )
}

export default EventItem;