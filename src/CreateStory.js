import React, { useState } from "react";
import './CreateStory.css';
import { getDatabase, ref, update } from "firebase/database";
import app from "./initialize";
import { useHistory } from "react-router-dom";
//import { dateVal } from "./Components/Board/Board.js";

const db = getDatabase(app);

//Code to find date and time is from freeCodeCamp tutorial
const timeElapsed = Date.now();
const created = new Date(timeElapsed);
var dateVal = created.toUTCString();

function CreateStory() {
    const [state, setState] = useState({
        storyName: "",
        storyDesc: "",
        category: "backlog",
        priority: "low",
        timeEstimate: 0
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const history = useHistory()

    return (
        <div className="CreateStory">
            <h1><p>Enter your story info on this page.</p></h1>
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
                    <option value="in_progess">In Progress</option>
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
                console.log(state.priority)
                const story = {
                    name:state.storyName,
                    description:state.storyDesc,
                    estimated_time:state.timeEstimate,
                    category:state.category,
                    priority:state.priority,
                    //dateCreated:created
                }
                const updates = {};
                updates['/stories/' + state.storyName] = story;
                update(ref(db), updates);
                history.push("/Board")
           }}>
            Next
          </button> 
        </div>
    );
}

export { created };
export { dateVal };
export default CreateStory;