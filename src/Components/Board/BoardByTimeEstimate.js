import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, update } from "firebase/database";
import Sidebar from '../Sidebar/Sidebar'

// Custom Components and CSS
import Story from "../../Classes/Story";
import Header from "./Header/Header";
import BoardBox from "./BoardBox/BoardBox";
import './Board.css';
import './Header/Header.css';
import { timeEstimate } from "./TimeEstimateEntry";

// Bootstrap Components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const db = getDatabase();
const dbRef = ref(db, 'stories');

function BoardByTimeEstimate() {
    //#region Iterate through all of the stories in the database
  
  const [storiesAsObj, setStories] = useState([]);
  
  useEffect(() => {
    
    const db = getDatabase();
    const dbRef = ref(db, 'stories');
    var childNames = [];
    var childDescriptions = [];
    var childTimes = [];
    var childCategories = [];
    var childPriorities = [];
    var childDates = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childName = childSnapshot.val().name;
        const childDesc = childSnapshot.val().description;
        const childTime = childSnapshot.val().estimated_time;
        const childCategory = childSnapshot.val().category;
        const childPriority = childSnapshot.val().priority;
        const childDate = childSnapshot.val().date_created;
        //alert(childDate);
        childNames.push(childName);
        childDescriptions.push(childDesc);
        childTimes.push(childTime);
        childCategories.push(childCategory);
        childPriorities.push(childPriority);
        childDates.push(childDate);
      });
      const assigner_ = "Qusai";
      const assignee_ = "Bob";
      var storiesAsObj = [];

      //Store stories as objects based on 
      for (var i = 0; i < childNames.length; i++) {
        if (childTimes[i] <= timeEstimate) {
            storiesAsObj.push(new Story(childNames[i], childDescriptions[i], childTimes[i], assigner_, assignee_, childPriorities[i], childCategories[i], childDates[i]));
        }
      }

      console.log(storiesAsObj);

      setStories(storiesAsObj);
    });

  }, []);
    
    

    
  
  //#endregion

    const [modalState, setModalState] = useState({
        show: false,
        story: null,
        //dayRange: 0
    });


  const handleChange = e => {
      setModalState({
          ...modalState,
          [e.target.name]: e.target.value,
      })
  }

    return (
      <div id="Board">
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="board-content">
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

                  <BoardBox categStories={storiesAsObj.filter(story => story.category === "in_progress")} modalFunc={setModalState}/>
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
          <div>
          <br></br>
          <br></br>    
          <Link to="/Board"><button>
          Back to Board
        </button>
          <br></br>
          <br></br>
        </Link>
        <Link to="/DayRangeEntry"><button>
          Board By Date
        </button>
          <br></br>
          <br></br>
        </Link>
        <Link to="/PrioritySelection"><button>
          Board By Priority
        </button>
          <br></br>
          <br></br>
        </Link>
        </div>
        </div>
          

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
    var time;
    var priority;
    var category;
    var date;
    if (props.story != null) {
        title = props.story.title
        description = props.story.description;
        time = props.story.time;
        priority = props.story.priority;
        category = props.story.category;
        date = props.story.date_created;
    }
    var priorityColor = "";
    if (priority == "high") {
        priorityColor = "red";
    }
    if (priority == "medium") {
        priorityColor = "orange";
    }
    if (priority == "low") {
        priorityColor = "green";
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
        <h4>Story Name: {title}</h4>
        <p>
          Time Estimate: {time} hrs
        </p>
        <p>
          Priority of this story: <font color={priorityColor}>{priority}</font>
        </p>
        <p>
          Date Created: {date}
        </p>
        <h4>Brief Story Description: </h4>
        <p>
          {description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          if (window.confirm("Are you sure you want to delete this story?")) {
            const updates = {};
            updates['/stories/' + props.story.title] = null;
            update(ref(db), updates);
          }
        }}>Delete Story</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BoardByTimeEstimate;