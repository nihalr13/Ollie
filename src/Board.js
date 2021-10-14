import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Button from "./Button.js";
import {Link } from "react-router-dom";
import CreateStory from "./CreateStory";
import Hello from "./CreateStory";
import save from "./CreateStory";
import val from "./CreateStory";
import test from "./CreateStory";

function Board() {

    const { test } = require('./CreateStory.js');
    const { val } = require('./CreateStory.js');
   //console.log(val);
    return <div>hello{ test }{ val }</div> 
    //return <div>{ val }</div>;
    //return <div>hello</div>;
    /*return (
        <div className="Board">
            <p>{ Hello }</p>
            <p>Hello</p>    
        </div>   
    );*/
      /*<p>
              {state.storyName}
            </p>*/
    /*return (
        <div class="container">
            <div class="card">
                <h5 class="board-box-title">Backlog</h5>
                <div class="card-body">
                    <div class="story-in-board">
                        <h6 class="story-title">Story 1</h6>
                        <h6 class="time-estimate">6 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 2</h6>
                        <h6 class="time-estimate">3 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 3</h6>
                        <h6 class="time-estimate">1 hrs</h6>
                    </div>
                </div>
            </div>
            <div class="card">
                <h5 class="board-box-title">In Progress</h5>
                <div class="card-body">
                    <div class="story-in-board">
                        <h6 class="story-title">Story 4</h6>
                        <h6 class="time-estimate">1 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 5</h6>
                        <h6 class="time-estimate">2 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 6</h6>
                        <h6 class="time-estimate">5 hrs</h6>
                    </div>
                </div>
            </div>
            <div class="card">
                <h5 class="board-box-title">Blocked</h5>
                <div class="card-body">
                    <div class="story-in-board">
                        <h6 class="story-title">Story 7</h6>
                        <h6 class="time-estimate">3 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 8</h6>
                        <h6 class="time-estimate">3 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 9</h6>
                        <h6 class="time-estimate">1 hrs</h6>
                    </div>
                </div>
            </div>
            <div class="card">
                <h5 class="board-box-title">Done</h5>
                <div class="card-body">
                    <div class="story-in-board">
                        <h6 class="story-title">Story 10</h6>
                        <h6 class="time-estimate">2 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 11</h6>
                        <h6 class="time-estimate">2 hrs</h6>
                    </div>
                    <div class="story-in-board">
                        <h6 class="story-title">Story 12</h6>
                        <h6 class="time-estimate">2 hrs</h6>
                    </div>
                </div>
            </div>
        </div>
    );*/

    /*const [state, setState] = useState({
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
            </form>
            <Link to="/Board"><button>
          Next
          </button> 
          </Link>
        </div>
    );*/
}

export default Board;