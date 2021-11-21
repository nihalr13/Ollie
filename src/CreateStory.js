import React, { useState } from "react";
import './CreateStory.css';
import { getDatabase, ref, update } from "firebase/database";
import app from "./initialize";
import { useHistory } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar'

const db = getDatabase(app);

function CreateStory() {
    const [state, setState] = useState({
        storyName: "",
        storyDesc: "",
        category: "backlog",
        priority: "low",
        timeEstimate: 0,
        date_created: ""
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const history = useHistory()

    return (
        <div id="CreateStory">
            <div id="sidebar">
                <Sidebar />
            </div>

            <div id="create-story-content">
                <h1>Enter your story info on this page.</h1>
                <form>
                    <label>
                        Name of Story:{" "} 
                        <input 
                        type="text" 
                        name="storyName"
                        value={state.storyName} 
                        onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>
                        Description of Story:{" "} 
                        <input 
                            type="text" 
                            name="storyDesc"
                            value={state.storyDesc} 
                            onChange={handleChange}
                        />
                    </label>
                    <br></br>
                    <label>
                        Category:
                        <select
                            name="category"
                            value={state.category} 
                            onChange={handleChange}
                        >
                        <option value="backlog">Backlog</option>
                        <option value="in_progress">In Progress</option>
                        <option value="blocked">Blocked</option>
                        <option value="done">Done</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Priority:
                        <select
                            name="priority"
                            value={state.priority} 
                            onChange={handleChange}
                        >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Time Estimate:{" "} 
                        <input 
                            type="number" 
                            name="timeEstimate"
                            value={state.timeEstimate} 
                            onChange={handleChange}
                        />
                    </label>
                </form>
                <button onClick={()=>{
                    
                    const timeElapsed = Date.now();
                    const created = new Date(timeElapsed);
                    var dateVal = created.getFullYear() + "-" + (created.getMonth() + 1) + "-" + created.getDate();

                    const story = {
                        name:state.storyName,
                        description:state.storyDesc,
                        estimated_time:state.timeEstimate,
                        category:state.category,
                        priority:state.priority,
                        date_created:dateVal
                    }
                    const updates = {};
                    updates['/stories/' + state.storyName] = story;
                    update(ref(db), updates);
                    history.push("/Board")
                    }}>
                    Next
                </button> 
            </div>       
        </div>
    );
}

export default CreateStory;