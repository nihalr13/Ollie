import React from 'react';

const BoardBox = (props) => {
    var categStories = props.categStories;
    let i = 0;
    return (
        <div>
            <div className="card-body">
                {categStories.map((story) => (
                    <BoardStory key={i++} story={story} modalFunc={props.modalFunc} />
                ))}
            </div>
        </div>
    );
}

const BoardStory = (props) => {
    return (
        <div>
            <a className="indiv-story-anchor" onClick={() => props.modalFunc({show: true, story: props.story})}>
                <div className="story-in-board">
                    <h6 className="story-title">{props.story.title}</h6>
                    <h6 className="time-estimate">{props.story.time} hrs</h6>
                </div>
            </a>
        </div>
    );
}

export default BoardBox