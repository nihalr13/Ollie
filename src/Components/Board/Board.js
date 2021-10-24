import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

// Custom Components and CSS
import Story from "../../Classes/Story";
import Header from "./Header/Header";
import BoardBox from "./BoardBox/BoardBox";
import './Board.css';
import './Header/Header.css';

// Bootstrap Components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// DONE: Add the modal show function to anchors 
// DONE: Figure out how to pass the story details to modal function


function Board() {
    //#region "Create dummy stories"
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
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 2, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[3] },
        {title: "Story " + i.toString(), description: description_ + i.toString(), time: 6, assigner: assigner_, assignee: assignee_, priority: i++, category: categories[0]}
    ];

    var storiesAsObj = [];


    for (i = 0; i < 13; i++) {
        storiesAsObj.push(new Story(storiesAsDict[i]["title"], storiesAsDict[i]["description"], storiesAsDict[i]["time"], storiesAsDict[i]["assigner"], storiesAsDict[i]["assignee"], storiesAsDict[i]["priority"], storiesAsDict[i]["category"]));
    }

    //#endregion

    //DONE: Continue working on Modal
    const [modalState, setModalState] = useState({
        show: false,
        story: null
    });


    // Iterate through all of the stories in the database
    const db = getDatabase();
    const dbRef = ref(db, 'stories');

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childCategory = childSnapshot.val().category;
        const childData = childSnapshot.val();
        console.log(childCategory);
        console.log(childData);
      });
    });


    return (
        <div>
        <Link to="/login"><button>
          Login
          </button>
          </Link>
        <Link to="/signup"><button>
          Sign-up
          </button>
          </Link>
        <Link to="/CreateStory"><button>
          Create Story
          </button>
          <br></br>
          <br></br>
          </Link>
          <button>
            Delete Story
          </button>
          <br></br>
          <br></br>
        <Link to="/Settings"><button>
          Settings
          </button>
          <br></br>
          <br></br> 
          </Link>
        <Link to="/Profile"><button>
          Profile
          </button> 
          <br></br>
          <br></br>
          </Link>
            <Header />
            <center>
                <div className="container">
                    <div className="card">
                        <Link className="board-anchors" to={{
                            pathname: "/StoryDetails",
                            state: { category: "backlog", stories: storiesAsObj }
                        }}>
                            <h5 className="board-box-title">Backlog</h5>
                        </Link>
                        <BoardBox categStories={storiesAsObj.filter(story => story.category === "backlog")} modalFunc={setModalState}/>
                    </div>
                    <div className="card">

                        <Link className="board-anchors" to={{
                            pathname: "/StoryDetails",
                            state: { category: "inprogress", stories: storiesAsObj }
                        }}>
                            <h5 className="board-box-title">In Progress</h5>
                        </Link>

                        <BoardBox categStories={storiesAsObj.filter(story => story.category === "inprogress")} modalFunc={setModalState}/>
                    </div>
                    <div className="card">

                        <Link className="board-anchors" to={{
                            pathname: "/StoryDetails",
                            state: { category: "blocked", stories: storiesAsObj }
                        }}>
                            <h5 className="board-box-title">Blocked</h5>
                        </Link>
                        
                        <BoardBox categStories={storiesAsObj.filter(story => story.category === "blocked")} modalFunc={setModalState}/>

                    </div>
                    <div className="card">

                        <Link className="board-anchors" to={{
                            pathname: "/StoryDetails",
                            state: { category: "done", stories: storiesAsObj }
                        }}>
                            <h5 className="board-box-title">Done</h5>
                        </Link> 

                        <BoardBox categStories={storiesAsObj.filter(story => story.category === "done")} modalFunc={setModalState}/>
                    </div>
                </div>
            </center>

            <MyVerticallyCenteredModal
            show={modalState.show}
            onHide={() => setModalState({show: false, story: modalState.story})}
            story={modalState.story}
            />

        </div>
    );
    
}


function MyVerticallyCenteredModal(props) {
    var title;
    var description;
    if (props.story != null) {
        title = props.story.title
        description = props.story.description;
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Story Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{title}</h4>
        <p>
          {description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Board;