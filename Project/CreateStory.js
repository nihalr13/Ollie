import React from "react";

function CreateStory() {
    return (
        <div>
            <h1><p>Enter your story info on this page.</p></h1>
            <form>
                <label>
                    Name of Story: <input type="text" />
                </label>
                <br></br>
                <label>
                    Description of Story: <input type="text" />
                </label>
            </form>
        </div>
    );
}

export default CreateStory;