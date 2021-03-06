import React from "react";
import StoryDetailsItem from './StoryDetailsItem'
import { useLocation } from 'react-router-dom'
import './StoryDetails.css'

import Sidebar from "../Sidebar/Sidebar"


function StoryDetails(props) {

    const location = useLocation();
    let {category, stories} = location.state;


    stories = stories.filter(story => story.category === category);


    return (
        <div id="StoryDetails">

            <div id="sidebar">
                <Sidebar />
            </div>

            <div id="story-details-content">
                {stories.map((story) => (
                    <StoryDetailsItem
                        story={story}
                        title={story.title}
                        time={story.time}
                        description={story.description}
                        priority={story.priority}
                        category={story.category}
                        assignee={story.assignee}
                        assigner={story.assigner}
                        date_created={story.date_created}
                        watch_list={story.watch_list}
                    />

                ))}

            </div>

        </div>);
}




export default StoryDetails;