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
import './board.css'


//card and card-body classNamees taken from bootstrap
//modal text inspired by https://www.w3schools.com/howto/howto_css_modals.asp

function Board() {

    const { test } = require('./CreateStory.js');
    //console.log(val);
    //return <div>hello{ test }</div> 
    //return <div>{ val }</div>;
    return <div>
    <body>
    
        <div className="header">
            <center>Project Board</center>
        </div>
    
    
        <center>
            <div className="container">
                <div className="card">
                    <a className="board-anchors" onclick="goToCategory('backlog')">
                        <h5 className="board-box-title">Backlog</h5>
                    </a>
                    <div className="card-body">
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 1</h6>
                                <h6 className="time-estimate">6 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 2</h6>
                                <h6 className="time-estimate">3 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 3</h6>
                                <h6 className="time-estimate">1 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <a className="board-anchors" onclick="goToCategory('inprogress');">
                        <h5 className="board-box-title">In Progress</h5>
                    </a>
    
                    <div className="card-body">
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 4</h6>
                                <h6 className="time-estimate">1 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 5</h6>
                                <h6 className="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 6</h6>
                                <h6 className="time-estimate">5 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <a className="board-anchors" onclick="goToCategory('blocked')">
                        <h5 className="board-box-title">Blocked</h5>
                    </a>
    
                    <div className="card-body">
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 7</h6>
                                <h6 className="time-estimate">3 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 8</h6>
                                <h6 className="time-estimate">3 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 9</h6>
                                <h6 className="time-estimate">1 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <a className="board-anchors" onclick="goToCategory('done')">
                        <h5 className="board-box-title">Done</h5>
                    </a>
    
                    <div className="card-body">
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 10</h6>
                                <h6 className="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 11</h6>
                                <h6 className="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                        <a className="indiv-story-anchor">
                            <div className="story-in-board">
                                <h6 className="story-title">Story 12</h6>
                                <h6 className="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </center>
    
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p id="modal-p-content">Some text in the Modal..</p>
            </div>
        </div>
    
    </body>
    </div>
    
}

export default Board;