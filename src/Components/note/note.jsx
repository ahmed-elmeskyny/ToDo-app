import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./note.scss";

const Note = ({ ...otherprops }) => (
  <div className="note-container" {...otherprops}>
    <div className="note-discription">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, saepe
        voluptatum, blanditiis earum culpa hic qui, iste eligendi eius assumenda
        esse velit molestiae cum praesentium veniam cumque asperiores
      </p>
      <div className="deletee">
        <AiOutlineDelete style={{ cursor: "pointer" }}></AiOutlineDelete>
      </div>
    </div>
  </div>
);

export default Note;
