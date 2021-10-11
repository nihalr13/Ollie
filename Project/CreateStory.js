import React, { useState } from "react";
import logo from './logo.svg';
import './CreateStory.css';
import {Link } from "react-router-dom";
//export { CreateStory };
export { val };

var val;
export function Hello() {
    return (<div>hello</div>);
}

export function save() {
    val = document.getElementById("storydsc").value;
    document.write(val);
}

//var dsc = document.getElementById('storydsc').value;
var dsc;


function CreateStory() {
    const [state, setState] = useState({
        storyName: "",
        storyDesc: "",
        priority: "",
        timeEstimate: ""
    })


    //localStorage.story_description = {state.storyDesc};
    //localStorage.story_name = setState(storyName);
    //const [storyName, setStoryName] = useState("")
    //const [storyDesc, setStoryDesc] = useState("")

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }


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
                        type="text" 
                        name="timeEstimate"
                        value={state.timeEstimate} 
                        onChange={handleChange}
                    />
                </label>
            </form>
            <Link to="/Board"><button>
            Next
          </button> 
          </Link>
        </div>
    );
}

export default CreateStory;