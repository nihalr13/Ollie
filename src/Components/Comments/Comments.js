import React from "react";
import './Comments.css'

// props will be the comment object retrieved from the database

const Comment = (props) => {
    var comment = props.comment
    return <div className="Comment">
      <p>{comment.text}</p>
    </div>
}

export default Comment;