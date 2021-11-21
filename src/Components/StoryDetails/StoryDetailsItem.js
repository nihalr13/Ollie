import React from "react";
import { FaStar, FaRegEye} from "react-icons/fa";


var currUserObj = { favStories: [] }; //replace with actual currUserObj which include favStories attribute

export { currUserObj }; //for testing

function StoryDetailsItem(props) {

    const handleFavoritingStory = (event) => {
        event.preventDefault();
        if (event.target.style.color === "yellow") {
            currUserObj.favStories = Object.values(currUserObj.favStories).filter(item => item !== props.story);
            event.target.style.color = "white";
            console.log("remove: ", currUserObj.favStories)
        }
        else {
            currUserObj.favStories.push(props.story);
            event.target.style.color = "yellow";
            console.log("add: ", currUserObj.favStories)
        }
    };

    var starbtn;
    var watchbtn = <button className="wtch-btn"><FaRegEye className="wtch-icon" /></button>;

    if (currUserObj.favStories.includes(props.story)) {
        starbtn = <button className="fav-btn-yellow" onClick={handleFavoritingStory}><FaStar className="star-icon" /></button>;
    }
    else {
        starbtn = <button className="fav-btn" onClick={handleFavoritingStory}><FaStar className="star-icon" /></button>;
    }


    return (
        <div className="story-item">
            <div className="story-first-row">
                <h6 className="story-title">Title: {props.title}</h6>
                {watchbtn}
                {starbtn}
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