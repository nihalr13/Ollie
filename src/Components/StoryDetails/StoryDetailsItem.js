import React, {useState} from "react";
import { getAuth } from "firebase/auth";
import { FaStar, FaRegEye } from "react-icons/fa";
import { getDatabase, ref, onValue, update, push, set } from "firebase/database";



var currUserObj = { favStories: [] }; //replace with actual currUserObj which include favStories attribute

const db = getDatabase();
const dbRef = ref(db, 'stories');

export { currUserObj }; //for testing

function StoryDetailsItem(props) {
    var currentStory = props.story;


    const handleWatchingStory = (event) => {
        event.preventDefault();

        if (currentStory.watch_list.find(element => element === "ollie.project.307@gmail.com") !== undefined) {
            currentStory.watch_list = currentStory.watch_list.filter(item => item !== "ollie.project.307@gmail.com"/*user.email*/);
            event.target.style.color = "white";
            console.log("remove: ", currentStory.watch_list);
            const updates = {};
            updates['/stories/' + props.story.title] = currentStory;
            update(ref(db), updates);
        }
        else {
            currentStory.watch_list.push("ollie.project.307@gmail.com"/*user.email*/);
            event.target.style.color = "yellow";
            console.log("add: ", currentStory.watch_list)
            const updates = {};
            updates['/stories/' + props.story.title] = currentStory;
            update(ref(db), updates);
        }
    };

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
    var watchbtn;

    //handle when stories are already favorited/watched
    if (currUserObj.favStories.includes(props.story)) {
        starbtn = <button className="fav-btn-yellow" onClick={handleFavoritingStory}><FaStar className="star-icon" /></button>;
    }
    else {
        starbtn = <button className="fav-btn" onClick={handleFavoritingStory}><FaStar className="star-icon" /></button>;
    }

    //TODO: do the same as above for watch story
    if (currentStory.watch_list.find(element => element === "ollie.project.307@gmail.com")) {
        watchbtn = <button className="wtch-btn-yellow" onClick={handleWatchingStory}><FaRegEye className="wtch-icon" /></button>;
    }
    else {
        watchbtn = <button className="wtch-btn" onClick={handleWatchingStory}><FaRegEye className="wtch-icon" /></button>;   
    }


    return (
        <div className="story-item">
            <div className="story-first-row">
                <h6 className="story-title">Title: {props.title}</h6>
                <div className="story-btns">
                    {watchbtn}
                    {starbtn}
                </div>
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