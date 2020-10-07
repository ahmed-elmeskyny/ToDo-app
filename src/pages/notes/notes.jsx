import React from "react";
import "./notes.scss";
import Note from "../../Components/note/note";
import SideProfile from "../../Components/side-profile/side-profile";
import NoteForm from "../../Components/note-form/note-form";

const Notes = () => (
  <>
    <SideProfile></SideProfile>
    <div className="notes-page">
      <div className="notes-header">
        <h1>Notes :</h1>
      </div>
      <div className="note-form">
        <NoteForm></NoteForm>
      </div>
      <div className="notes">
        <Note style={{ backgroundColor: "lightblue" }}></Note>
        <Note style={{ backgroundColor: "lightpink" }}></Note>
        <Note style={{ backgroundColor: "lightgreen" }}></Note>
        <Note style={{ backgroundColor: "lightgrey" }}></Note>
        <Note></Note>
        <Note style={{ backgroundColor: "lightyellow" }}></Note>
      </div>
    </div>
  </>
);

export default Notes;
