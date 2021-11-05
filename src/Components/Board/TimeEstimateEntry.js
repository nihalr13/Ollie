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

var timeEstimate = 0;

function TimeEstimateEntry() {
    const [state, setState] = useState({
        timeEstimate: 0
    })
    timeEstimate = state.timeEstimate;

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
          Time Estimate:{" "} 
              <input 
                type="number" 
                name="timeEstimate"
                value={state.timeEstimate} 
                onChange={handleChange}
              />   
          </label>
      </form>
      <Link to="/BoardByTimeEstimate"><button>
          Next
        </button>
          <br></br>
          <br></br>
        </Link>
  </div>
  );
}

export { timeEstimate };
export default TimeEstimateEntry;