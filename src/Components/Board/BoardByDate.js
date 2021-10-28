import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { dateVal } from "./Board";

function BoardByDate() {
    alert("Hello");
    return ( <div className="BoardByDate"> {dateVal} </div> );

}

export default BoardByDate;