import React from "react";
import "./event-form.scss";
import Custtombutton from "../CusttomButton/custtom-button";
import { connect } from "react-redux";
import { createEvent } from "../../firebase/firebase.utils";
import { AddEvent } from "../../redux/event-reducer/event.action";
import Spinner2 from "../spinner2/spinner2";

class EventForm extends React.Component {
  state = {
    date: "",
    event: "",
    isLoading: false,
  };
  handleSubmit = async (e) => {
    this.setState({ isLoading: true });
    e.preventDefault();
    const form = document.querySelector(".form");
    const { date, event } = form;
    try {
      const eventRef = await createEvent(
        this.props.currentUser,
        event.value,
        date.value
      );
      this.props.AddEvent({
        eventDate: date.value,
        event: event.value,
        id: eventRef.id,
      });
      this.setState({ date: "", event: "" });
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
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="date-form">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min={new Date().toISOString()}
            placeholder="MM/DD"
            value={this.state.date}
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="discription-form">
          <label>Discription</label>
          <input
            type="text"
            name="event"
            value={this.state.event}
            onChange={this.handleChange}
            placeholder="write...."
            required
          ></input>
        </div>
        <Custtombutton type="submit" inverted style={{ marginTop: "25px" }}>
          Add event
        </Custtombutton>
      </form>
    );
  }
}
const mapstateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  AddEvent: (event) => dispatch(AddEvent(event)),
});
export default connect(mapstateToProps, mapDispatchToProps)(EventForm);
