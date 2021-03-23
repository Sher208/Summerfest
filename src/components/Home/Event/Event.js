import React, { Fragment } from 'react';
import EventItem from './EventItem'
import './Event.scss';

const Event = () => {

    const events = [
        { "id": 1, "name": "Photography", "desc": "Submit to us your best captured moments that you think are worth sharing. Maximum of two entries per individual." },
        { "id": 2, "name": "Writing", "desc": "Rework how your favourite writer concluded one of their pieces or weave a story around photo prompts. Maximum of two entries per individual." },
        { "id": 3, "name": "Art", "desc": "Send us your best artworks and/or designs that capture your creativity to the fullest. Maximum of three entries per contestant will be accepted." }
    ];

    return(
        <div className="eventContainer">
            {events.map(event => <EventItem id={event.id} name={event.name} desc={event.desc}/>)}
        </div>
    )
}

export default Event;