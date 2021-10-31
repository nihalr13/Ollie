import React from "react";
import StoryDetailsItem from './StoryDetailsItem'
import { useLocation } from 'react-router-dom'

function StoryDetails(props) {

    const location = useLocation();
    let {category, stories} = location.state;

    console.log(stories)

    stories = stories.filter(story => story.category === category);

    console.log(stories)

    return <div>

        <div className="header">
            {category} Stories
        </div>

        <div className="container">
            {stories.map((story) => (
                <StoryDetailsItem
                 title = {story.title}
                 time = {story.time}
                 description = {story.description}
                 priority = {story.priority}
                 category = {story.category}
                 assignee = {story.assignee}
                 assigner = {story.assigner}
                 date_created = {story.date_created}
                />

            ))}

        </div>

    </div>;
}




export default StoryDetails;