import React from "react";
import { FaStar } from "react-icons/fa";

function StoryDetailsItem(props) {

    const handleFavoritingStory = (event) => {
        event.preventDefault();
        if (event.target.style.color === "yellow") {
            event.target.style.color = "white";
        }
        else {
            event.target.style.color = "yellow";
        }

    };


    return (
        <div className="story-item">
            <div className="story-first-row">
                <h6 className="story-title">Title: {props.title}</h6>
                <button className="fav-btn" onClick={handleFavoritingStory}><FaStar className="star-icon" /></button>
            </div>
            <h6 className="story-time">Time: {props.time}</h6>
            <p className="story-description">Description: {props.description}</p>
            <h6 className="story-priority">Priority: {props.priority}</h6>
            <h6 className="story-category">Category: {props.category}</h6>
            <h6 className="story-assignee">Assignee: {props.assignee}</h6>
            <h6 className="story-assigner">Assigner: {props.assigner}</h6>
            <h6 className="story-date_created">Date Created: {props.date_created}</h6>
        </div>

        );
}

export default StoryDetailsItem;