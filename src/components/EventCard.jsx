import React from "react";

const EventCard = (props) => {
    return (
        <td className="event-td">
            <div className="event-card">
                <img src={props.image} alt={props.event} />
                <h3>{props.event}</h3>
                <p>{props.date}</p>
                <p>{props.time}</p>
                <p>{props.location}</p>
            </div>
        </td>
    );
};

export default EventCard;