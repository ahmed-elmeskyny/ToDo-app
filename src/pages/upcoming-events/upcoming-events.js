import React from "react";
import "./upcoming-events.scss";
import Event from "../../Components/event/event";
import Empty from "../../Components/empty/empty";
import EventForm from "../../Components/event-form/event-form";
import SideProfile from "../../Components/side-profile/side-profile";
import { connect } from "react-redux";
import { AddEvent } from "../../redux/event-reducer/event.action";

const UpComingEvents = ({ events, currentUser }) => {
  return (
    <>
      <SideProfile></SideProfile>
      <div className="upcoming-page">
        <div className="upcoming-header">
          <h1>Upcoming Events : </h1>
        </div>
        <div className="event-form">
          <EventForm></EventForm>
        </div>
        {events ? (
          <div className="events-container">
            {events.map((event) => (
              <Event key={event.id} event={event} user={currentUser}></Event>
            ))}
          </div>
        ) : (
          <Empty style={{ margin: "140px" }}>
            {" "}
            no upcoming events , please create one{" "}
          </Empty>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  events: state.events.events,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  AddEvent: (event) => dispatch(AddEvent(event)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UpComingEvents);
