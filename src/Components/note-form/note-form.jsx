import React from "react";
import "./note-form.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { createNote } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { AddNote } from "../../redux/note-reducer/note.action";
import Spinner2 from "../spinner2/spinner2";

class NoteForm extends React.Component {
  state = {
    note: "",
    isLoading: false,
  };
  handleSubmit = async (e) => {
    this.setState({ isLoading: true });
    e.preventDefault();
    const form = document.querySelector(".note");
    const { note } = form;
    try {
      const noteRef = await createNote(this.props.currentUser, note.value);
      this.props.AddNote({
        id: noteRef.id,
        note: note.value,
      });
      this.setState({ note: "" });
    } catch (error) {
      console.log(error);
    }
    this.setState({ isLoading: false });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return this.state.isLoading ? (
      <div className="svbb">
        <Spinner2></Spinner2>
      </div>
    ) : (
      <form className="note" onSubmit={this.handleSubmit}>
        <div className="note-form">
          <label>Note</label>
          <input
            type="text"
            name="note"
            value={this.state.note}
            onChange={this.handleChange}
            placeholder="write...."
            required
          ></input>
        </div>
        <CusttomButton type="submit" inverted style={{ marginTop: "25px" }}>
          Add note
        </CusttomButton>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const dispatchToProps = (dispatch) => ({
  AddNote: (note) => dispatch(AddNote(note)),
});
export default connect(mapStateToProps, dispatchToProps)(NoteForm);
