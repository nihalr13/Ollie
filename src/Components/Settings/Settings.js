import React, { Component } from "react";
import {Link } from "react-router-dom";
import './settings.css'


//card and card-body classNamees taken from bootstrap
//modal text inspired by https://www.w3schools.com/howto/howto_css_modals.asp

function Settings() {

    return <div>
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
        <button type="button" onclick="onSave()">Save</button>

        
    </div>
    </body>
    </div>
    
}




export default Settings;