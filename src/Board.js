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

//card and card-body classes taken from bootstrap
//modal text inspired by https://www.w3schools.com/howto/howto_css_modals.asp

function Board() {

    const { test } = require('./CreateStory.js');
    //console.log(val);
    //return <div>hello{ test }</div> 
    //return <div>{ val }</div>;
    return <div>
    <body>
    
        <div class="header">
            <center>Project Board</center>
        </div>
    
    
        <center>
            <div class="container">
                <div class="card">
                    <a class="board-anchors" onclick="goToCategory('backlog')">
                        <h5 class="board-box-title">Backlog</h5>
                    </a>
                    <div class="card-body">
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 1</h6>
                                <h6 class="time-estimate">6 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 2</h6>
                                <h6 class="time-estimate">3 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 3</h6>
                                <h6 class="time-estimate">1 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <a class="board-anchors" onclick="goToCategory('inprogress');">
                        <h5 class="board-box-title">In Progress</h5>
                    </a>
    
                    <div class="card-body">
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 4</h6>
                                <h6 class="time-estimate">1 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 5</h6>
                                <h6 class="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 6</h6>
                                <h6 class="time-estimate">5 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <a class="board-anchors" onclick="goToCategory('blocked')">
                        <h5 class="board-box-title">Blocked</h5>
                    </a>
    
                    <div class="card-body">
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 7</h6>
                                <h6 class="time-estimate">3 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 8</h6>
                                <h6 class="time-estimate">3 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 9</h6>
                                <h6 class="time-estimate">1 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card">
                    <a class="board-anchors" onclick="goToCategory('done')">
                        <h5 class="board-box-title">Done</h5>
                    </a>
    
                    <div class="card-body">
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 10</h6>
                                <h6 class="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 11</h6>
                                <h6 class="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                        <a class="indiv-story-anchor">
                            <div class="story-in-board">
                                <h6 class="story-title">Story 12</h6>
                                <h6 class="time-estimate">2 hrs</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </center>
    
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p id="modal-p-content">Some text in the Modal..</p>
            </div>
        </div>
    
    </body>
    </div>
    
}

export default Board;