import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./note.scss";

const Note = ({ note, ...otherprops }) => (
  <div className="note-container" {...otherprops}>
    <div className="note-discription">
      <p>{note}</p>
      <div className="deletee">
        <AiOutlineDelete style={{ cursor: "pointer" }}></AiOutlineDelete>
      </div>
    </div>
  </div>
);

export default Note;
