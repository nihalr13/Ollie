import React, { Component } from "react";
import { Link } from "react-router-dom";
import './settings.css'
import { getAuth, deleteUser } from "firebase/auth";
import app from "../../initialize";
import { getDatabase, ref, update } from "firebase/database";

const db = getDatabase(app);

//card and card-body classNamees taken from bootstrap
//modal text inspired by https://www.w3schools.com/howto/howto_css_modals.asp

class Settings extends Component {

  DeleteAcc() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (window.confirm("Are you sure you want to delete this account?")) {
      deleteUser(user).then(() => {
        alert("User deleted successfully.")
        // User deleted, so sign them out and navigate to log-in page.
        this.props.history.push("/login");
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    } else {
      // remove popup and do nothing
    }
  }

    render() { return <div>
      <body>
      <div class="settings-header"></div>

      <div class="settings-container">
          <div class="settings-item">
              <label>default story category</label>
              <select id="story_category">
                  <option value="backlog">backlog</option>
                  <option value="in progress">in progress</option>
                  <option value="blocked">blocked</option>
                  <option value="done">done</option>
              </select>
          </div>
          <div class="settings-item">
              <label>broswer notifications</label>
              <select id="browser_notifications">
                  <option value="enable">enable</option>
                  <option value="disable">disable</option>
              </select>
          </div>
          <div class="settings-item">
              <label>email notifications</label>
              <select id="email_notifications">
                  <option value="enable">enable</option>
                  <option value="disable">disable</option>
              </select>
          </div>
          <button type="button" onClick={ this.DeleteAcc } >Delete Account</button>
          <button type="button" onclick="onSave()">Save</button>

          
      </div>
      </body>
      </div>
    }
}




export default Settings;