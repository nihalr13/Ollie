import React from "react";

function StoryDetailsItem(props) {


    return <div>

        <div className="story-item">
            <h5 className="story-title">Title: {props.title}</h5>
            <h5 className="story-time">Time: {props.time}</h5>
            <p className="story-description">Description: {props.description}</p>
            <h5 className="story-priority">Priority: {props.priority}</h5>
            <h5 className="story-category">Category: {props.category}</h5>
            <h5 className="story-assignee">Assignee: {props.assignee}</h5>
            <h5 className="story-assigner">Assigner: {props.assigner}</h5>
        </div>

    </div>;
}




export default StoryDetailsItem;