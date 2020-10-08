import React from "react";
import "./notes.scss";
import Note from "../../Components/note/note";
import SideProfile from "../../Components/side-profile/side-profile";
import NoteForm from "../../Components/note-form/note-form";
import Empty from "../../Components/empty/empty";
import { connect } from "react-redux";

const Notes = ({ notes }) => (
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
        {notes ? (
          notes.map((note) => <Note key={note.id} note={note.note}></Note>)
        ) : (
          <Empty> no notes to see</Empty>
        )}
      </div>
    </div>
  </>
);
const mapStateToProps = (state) => ({
  notes: state.notes.notes,
});
export default connect(mapStateToProps)(Notes);
