import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, update, push, set } from "firebase/database";
import Sidebar from '../Sidebar/Sidebar'

// Custom Components and CSS
import Story from "../../Classes/Story";
import BoardBox from "./BoardBox/BoardBox";
import Comment from "../Comments/Comments";
import './Board.css';

// Bootstrap Components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Code to find date and time is from freeCodeCamp tutorial
const timeElapsed = Date.now();
const created = new Date(timeElapsed);
var dateVal = created.toUTCString();

const db = getDatabase();
const dbRef = ref(db, 'stories');

function Board() {

  //#region Iterate through all of the stories in the database

  const [storiesAsObj, setStories] = useState([]);
  let firstFetch = true;

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      var childNames = [];
      var childDescriptions = [];
      var childTimes = [];
      var childCategories = [];
      var childPriorities = [];
      var childDates = [];
      var childCommentLists = [];
      var childWatchLists = [];

      snapshot.forEach((childSnapshot) => {
        const childName = childSnapshot.val().name;
        const childDesc = childSnapshot.val().description;
        const childTime = childSnapshot.val().estimated_time;
        const childCategory = childSnapshot.val().category;
        const childPriority = childSnapshot.val().priority;
        const childDate = childSnapshot.val().date_created;
        const childComments = childSnapshot.val().comments;
        let childWatchList = [];
        console.log("Check", childSnapshot.val().watch_list)
        if (childSnapshot.val().watch_list !== undefined) {
          childWatchList = childSnapshot.val().watch_list;
        }
        childNames.push(childName);
        childDescriptions.push(childDesc);
        childTimes.push(childTime);
        childCategories.push(childCategory);
        childPriorities.push(childPriority);
        childDates.push(childDate);
        childCommentLists.push(childComments);
        childWatchLists.push(childWatchList);
      });
      const assigner_ = "Qusai";
      const assignee_ = "Bob";
      var fetchedStories = [];

      //Store stories as objects based on 
      for (var i = 0; i < childNames.length; i++) {
        fetchedStories.push(new Story(childNames[i], childDescriptions[i], childTimes[i], assigner_, assignee_, childPriorities[i], childCategories[i], childDates[i], childCommentLists[i], childWatchLists[i]));
      }

      setStories(fetchedStories);
      if (!firstFetch) {
        {/* Used to view an alert to users whenever a change happens to the stories in the database */ }
        toast.info('Stories have been updated!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      else {
        firstFetch = false;
      }
    });
  }, []);

  //#endregion

  const [modalState, setModalState] = useState({
    show: false,
    story: null
  });

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
            <BoardBox categStories={storiesAsObj.filter(story => story.category === "backlog")} modalFunc={setModalState} />
          </div>
          <div className="card">

            <Link className="board-anchors" to={{
              pathname: "/StoryDetails",
              state: { category: "in_progress", stories: storiesAsObj }
            }}>
              <h5 className="board-box-title">In Progress</h5>
            </Link>

            <BoardBox categStories={storiesAsObj.filter(story => story.category === "in_progress")} modalFunc={setModalState} />
          </div>
          <div className="card">

            <Link className="board-anchors" to={{
              pathname: "/StoryDetails",
              state: { category: "blocked", stories: storiesAsObj }
            }}>
              <h5 className="board-box-title">Blocked</h5>
            </Link>

            <BoardBox categStories={storiesAsObj.filter(story => story.category === "blocked")} modalFunc={setModalState} />

          </div>
          <div className="card">

            <Link className="board-anchors" to={{
              pathname: "/StoryDetails",
              state: { category: "done", stories: storiesAsObj }
            }}>
              <h5 className="board-box-title">Done</h5>
            </Link>

            <BoardBox categStories={storiesAsObj.filter(story => story.category === "done")} modalFunc={setModalState} />
          </div>
        </div>


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
        <Link to="/TimeEstimateEntry"><button>
          Board By Time Estimate
        </button>
          <br></br>
          <br></br>
        </Link>
      </div>

      {modalState.show === true && <MyVerticallyCenteredModal
        show={modalState.show}
        onHide={() => setModalState({ show: false, story: modalState.story })}
        story={modalState.story}
      />}

      {/* Used to view an alert to users whenever a change happens to the stories in the database */}
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
  );
}


function MyVerticallyCenteredModal(props) {
  var commentList = [];

  // If the story doesn't have any comments, ignore. Else, add them to commentList
  if (props.story.comments != null && props.story.comments != undefined) {
    commentList = props.story.comments;
    console.log(commentList);   
  }

  // state for new comment input box
  const [newComment, setNewComment] = useState('');
  // state for comments (helps in auto updating, handling change in input stuff, etc...)
  const [comments, setComments] = useState(commentList);



  //Below functions (Change, Submit) are for handling new comments by user
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  }

  const handleCommentSubmit = (event) => {
    setComments([...comments, {text: newComment}])
    event.preventDefault();

    const commentListRef = ref(db, '/stories/' + props.story.title + '/comments');
    const newCommentRef = push(commentListRef);
    set(newCommentRef, {
      newComment
    });
  }

  // to set up initial state of the story values and handling when they change (related to auto update and checking isEdit)
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

  const initialState = {
    isEdit: false,
    title: title, 
    time: time, 
    priority: priority,
    description: description
  }
  const[state, setState] = useState(initialState)

  //#region 
  const handleEdit = () => {
      setState({
        ...state,
        isEdit: true
      })
  }

  const handleSave = (event) => {
      // const story = {
      //   name:props.title,
      //   description:state.storyDesc,
      //   estimated_time:state.timeEstimate,
      //   category:state.category,
      //   priority:state.priority,
      //   date_created:dateVal,
      //   comments:state.comments
      // }
      // const updates = {};
      // updates['/stories/' + state.storyName] = story;
      // update(ref(db), updates);
      setState({
        ...state,
        isEdit: false
      })
  }

  const handleChange = e => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
}

  var titleComp;
  var timeComp;
  var priorityComp;
  var descriptionComp;
  var button;

  if (state.isEdit) {
    titleComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChange} value={state.title} name="title"></input></Col>;
    timeComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChange} value={state.time} name="time"></input></Col>;
    priorityComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChange} value={state.priority} name="priority"></input></Col>;
    descriptionComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChange} value={state.description} name="description"></input></Col>;
    button = <button id="edit-btn" onClick={handleSave}>Save Changes</button>;
  }
  else {
    titleComp = <Col md="auto" lg="auto">{state.title}</Col>;
    timeComp = <Col md="auto" lg="auto">{state.time}</Col>;
    priorityComp = <Col md="auto" lg="auto">{state.priority}</Col>;
    descriptionComp = <Col md="auto" lg="auto">{state.description}</Col>;
    button = <button id="edit-btn" onClick={handleEdit}>Edit Story</button>;
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
        <p>
          <h4>Story Title: {titleComp}</h4>
        </p> 
        <p>
          <b>Time Estimate:</b> {timeComp}
        </p>
        <p>
          <b>Priority of this story:</b> <font color={priorityColor}>{priorityComp}</font>
        </p>
        <p>
          <b>Date Created:</b><br></br>
          {date}
        </p>
        <b>Brief Story Description:</b>
        <p>
          {descriptionComp}
        </p>
        {button}

        <hr id="comments-section-line"></hr>
        {/* Add section for adding comments */}
        <h5>Comments</h5>

        <form onSubmit={handleCommentSubmit}>
          Enter new comment <input type="text" onChange={handleCommentChange}/>
          <input type="submit"/>
        </form>

        {comments.map((comment) => {
          return <Comment comment={comment} />
        })}


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
  //#endregion
}

export { created };
export { dateVal };
export default Board;