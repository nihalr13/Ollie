import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import Sidebar from '../Sidebar/Sidebar'

// Custom Components and CSS
import Story from "../../Classes/Story";
import Header from "./Header/Header";
import BoardBox from "./BoardBox/BoardBox";
import './Board.css';
import './Header/Header.css';

// Bootstrap Components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

var prioritySelection = "";

function PrioritySelectionEntry() {
    const [state, setState] = useState({
        prioritySelection: "low"
    })
    prioritySelection = state.prioritySelection;

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

  return (
  <div>
      <form>
            <label>
                    Priority:
                    <select
                        name="prioritySelection"
                        value={state.prioritySelection} 
                        onChange={handleChange}
                    >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    </select>
            </label>
      </form>
      <Link to="/BoardByPriority"><button>
          Next
        </button>
          <br></br>
          <br></br>
        </Link>
  </div>
  );
}

export { prioritySelection };
export default PrioritySelectionEntry;