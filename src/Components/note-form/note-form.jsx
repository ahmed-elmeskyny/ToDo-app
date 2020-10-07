import React from "react";
import "./note-form.scss";
import CusttomButton from "../CusttomButton/custtom-button";
import { createNote } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

class NoteForm extends React.Component {
  state = {
    note: "",
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".note");
    const { note } = form;
    try {
      const noteRef = await createNote(this.props.currentUser, note.value);
      this.setState({ note: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
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
export default connect(mapStateToProps)(NoteForm);
