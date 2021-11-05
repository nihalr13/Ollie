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

var val = 0;

function DayRangeEntry() {
    const [state, setState] = useState({
        dayRange: 0
    })
    val = state.dayRange;

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

  return (<div>
      <form>
          <label>
          Day Range:{" "} 
              <input 
                type="number" 
                name="dayRange"
                value={state.dayRange} 
                onChange={handleChange}
              />   
          </label>
      </form>
      <Link to="/BoardByDate"><button>
          Next
        </button>
          <br></br>
          <br></br>
        </Link>
  </div>
  );
}

export { val };
export default DayRangeEntry;