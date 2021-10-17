import React, { Component } from "react";
import {Link } from "react-router-dom";
import Story from "../../Classes/Story";
import './Board.css'


function goToCategory(category) {
    window.location.href = "StoryDetails";
    console.log(category.type);
}

const categories = ["backlog", "inprogress", "blocked", "done"];
const description_ = "description of story ";
const assigner_ = "Qusai";
const assignee_ = "Bob";

var i = 1;
var storiesAsDict = [
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 6, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 5, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]},
    {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]}
];

var storiesAsObj = [];


for (i = 0; i < 10; i++) {
    storiesAsObj.push(new Story(storiesAsDict[i]["title"], storiesAsDict[i]["description"], storiesAsDict[i]["time"], storiesAsDict[i]["assigner"], storiesAsDict[i]["assignee"], storiesAsDict[i]["priority"], storiesAsDict[i]["category"]));
}


// Inspired by https://www.w3schools.com/howto/howto_css_modals.asp

// var modal = document.getElementById("myModal");
// var triggers = document.getElementsByClassName("indiv-story-anchor");
// triggers = Array.from(triggers);
// var span = document.getElementsByClassName("close")[0];

// triggers.forEach( (trigger) => {
//     trigger.onClick = () => {
//         var p = document.getElementById("modal-p-content");
//         var storyName = trigger.getElementsByClassName("story-title")[0].innerHTML;
//         var storyObj = storiesAsObj.find((story) => story.title == storyName);
//         p.innerHTML = "title: " + storyObj.title + "; " +
//          "description: " + storyObj.description + "; " +
//          "time: " + storyObj.time + "; " +
//          "assigner: " + storyObj.assigner + "; " +
//          "assignee: " + storyObj.assignee + "; " +
//          "priority: " + storyObj.priority + "; " +
//          "category: " + storyObj.category + "; ";
//         modal.style.display = "block";
//     }

// });

// span.onClick = function() {
//   modal.style.display = "none";
// }

// window.onClick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


//card and card-body classNamees taken from bootstrap
//modal text inspired by https://www.w3schools.com/howto/howto_css_modals.asp

function Board() {
    const categories = ["backlog", "inprogress", "blocked", "done"];
    const description_ = "description of story ";
    const assigner_ = "Qusai";
    const assignee_ = "Bob";

    var i = 1;
    var storiesAsDict = [
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 6, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 5, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[1]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 3, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 1, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[2]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]},
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3]}
    ];

    var storiesAsObj = [];


    for (i = 0; i < 10; i++) {
        storiesAsObj.push(new Story(storiesAsDict[i]["title"], storiesAsDict[i]["description"], storiesAsDict[i]["time"], storiesAsDict[i]["assigner"], storiesAsDict[i]["assignee"], storiesAsDict[i]["priority"], storiesAsDict[i]["category"]));
    }



    return <div>


    <div className="header">
        <center>Project Board</center>
    </div>


    <center>
        <div className="container">
            <div className="card">
                <Link className="board-anchors" to={{ 
                                                    pathname: "/StoryDetails", 
                                                    state: {category: "backlog", stories: storiesAsObj} 
                                                    }}>
                    <h5 className="board-box-title">Backlog</h5>
                </Link>
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
                <a className="board-anchors" onClick={() => goToCategory("inprogress")}>
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
                <a className="board-anchors" onClick={() => goToCategory("blocked")}>
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
                <a className="board-anchors" onClick={() => goToCategory("done")}>
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

    </div>
    
}

export default Board;