import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { dateVal } from "./Board";
import { created } from "./Board";

function BoardByDate() {
    alert("Hello");
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const diff = today.getDate() - created.getDate();
    return ( <div className="BoardByDate"> { diff }<br></br> {dateVal} </div> );

}

export default BoardByDate;