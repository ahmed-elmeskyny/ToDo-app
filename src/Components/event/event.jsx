import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { DeleteEvent } from "../../redux/event-reducer/event.action";
import { db } from "../../firebase/firebase.utils";
import "./event.scss";

const Event = ({ event, DeleteEvent, user }) => {
  return (
    <div className="event-container">
      <div className="date" style={{ color: "#14557b" }}>
        <span>{event.eventDate}</span>
      </div>
      <div className="event-disc">
        <p>{event.event}</p>
        <AiOutlineDelete
          style={{ color: " #7fcec5" }}
          onClick={() => {
            db.collection("UsersData")
              .doc(`${user.id}`)
              .collection("UserEvents")
              .doc(`${event.id}`)
              .delete();
            DeleteEvent(event.id);
          }}
        ></AiOutlineDelete>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  DeleteEvent: (event) => dispatch(DeleteEvent(event)),
});
export default connect(null, mapDispatchToProps)(Event);
