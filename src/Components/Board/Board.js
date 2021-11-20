import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue, update } from "firebase/database";
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
      snapshot.forEach((childSnapshot) => {
        const childName = childSnapshot.val().name;
        const childDesc = childSnapshot.val().description;
        const childTime = childSnapshot.val().estimated_time;
        const childCategory = childSnapshot.val().category;
        const childPriority = childSnapshot.val().priority;
        const childDate = childSnapshot.val().date_created;
        childNames.push(childName);
        childDescriptions.push(childDesc);
        childTimes.push(childTime);
        childCategories.push(childCategory);
        childPriorities.push(childPriority);
        childDates.push(childDate);
      });
      const assigner_ = "Qusai";
      const assignee_ = "Bob";
      var fetchedStories = [];

      //Store stories as objects based on 
      for (var i = 0; i < childNames.length; i++) {
        fetchedStories.push(new Story(childNames[i], childDescriptions[i], childTimes[i], assigner_, assignee_, childPriorities[i], childCategories[i], childDates[i]));
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

      <MyVerticallyCenteredModal
        show={modalState.show}
        onHide={() => setModalState({ show: false, story: modalState.story })}
        story={modalState.story}
      />

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

/* Work in progress email notifications, html below requires user to submit email so will brainstorm
   effective methods.*/

/*<form action="mailto:you@yourdomainhere.com" method="post"
  enctype="text/plain" >
    StoryName:title
    StoryDescription:description
    Category:category
    Priority:priority
    TimeEstimate:time
  <input type="submit" name="submit" value="Submit"></input>
</form>*/

function MyVerticallyCenteredModal(props) {
  var children = {text: "we are children", children: []}
  var parentComments = [{
    text: "this is good",
    children: []
  }, {
    text: "this is great",
    children: [{ text: "this is great 2", children: [] }, { text: "this is great 3", children: [] }]
  }, {
    text: "This is the best!",
    children: [{ text: "This is the best! 2", children: [children] }, { text: "This is the best! 3", children: [children, children] }]
  }];
  
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(parentComments);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  }

  const handleCommentSubmit = (event) => {
    setComments([...comments, {text: newComment, children: []}])
    event.preventDefault();
  }
  
//   const initialState = {
//     isEdit: false,
//     name: currUser.name,
//     email: currUser.email,
//     github: currUser.github
// }


// const [state, setState] = useState(initialState)



// const handleEdit = () => {
//     setState({
//         isEdit: true,
//         name: state.name,
//         email: state.email,
//         github: state.github
//     })
// }

// const handleSave = (event) => {
//     currUser.name = state.name;
//     currUser.email = state.email;
//     currUser.github = state.github;

//     setState({
//         isEdit: false,
//         name: state.name,
//         email: state.email,
//         github: state.github
//     })
// }

// const handleChangeName = (event) => {
//     setState({
//         isEdit: state.isEdit,
//         name: event.target.value,
//         email: state.email,
//         github: state.github
//     })
// }

// const handleChangeEmail = (event) => {
//     setState({
//         isEdit: state.isEdit,
//         name: state.name,
//         email: event.target.value,
//         github: state.github
//     })
// }

// const handleChangeGithub = (event) => {
//     setState({
//         isEdit: state.isEdit,
//         name: state.name,
//         email: state.email,
//         github: event.target.value
//     })
// }

     // {/* if (state.isEdit) {
      //   fullNameComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangeName} value={state.name}></input></Col>;
      //   EmailComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangeEmail} value={state.email}></input></Col>;
      //   GitComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangeGithub} value={state.github}></input></Col>;;
      //   ProjectsComp = <Col md="auto" lg="auto">{currUser.projects}</Col>;
      //   button = <button id="edit-btn" onClick={handleSave}>Save Changes</button>;
      // }
      // else {
      //   fullNameComp = <Col md="auto" lg="auto">{currUser.name}</Col>;
      //   EmailComp = <Col md="auto" lg="auto">{currUser.email}</Col>;
      //   GitComp = <Col md="auto" lg="auto">{currUser.github}</Col>;
      //   ProjectsComp = <Col md="auto" lg="auto">{currUser.projects}</Col>;
      //   button = <button id="edit-btn" onClick={handleEdit}>Edit Profile</button>;
      // } */
  
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
}

export { created };
export { dateVal };
export default Board;