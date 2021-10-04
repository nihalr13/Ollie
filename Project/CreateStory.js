import React, { useState } from "react";
import logo from './logo.svg';
import './CreateStory.css';
import {Link } from "react-router-dom";

function CreateStory() {
    const [state, setState] = useState({
        storyName: "",
        storyDesc: "",
    })
    //const [storyName, setStoryName] = useState("")
    //const [storyDesc, setStoryDesc] = useState("")

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
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
            </form>
            <Link to="/Board"><button>
          Next
          </button> 
          </Link>
        </div>
    );
}

export default CreateStory;