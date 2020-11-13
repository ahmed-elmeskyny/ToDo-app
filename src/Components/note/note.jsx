import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./note.scss";
import { connect} from "react-redux";
import { DeleteNote } from "../../redux/note-reducer/note.action";
import {db} from '../../firebase/firebase.utils'

const Note = ({ note, Delet , id , currentUser, ...otherprops  }) => (
  <div className="note-container" {...otherprops}>
    <div className="note-discription">
      <p>{note}</p>
      
      <div className="deletee">
        <AiOutlineDelete style={{ cursor: "pointer" }} 
        onClick={()=> {
          Delet(id);
          db.collection('UsersData')
          .doc(`${currentUser.id}`)
          .collection('UserNotes')
          .doc(`${id}`)
          .delete()

        }}>

        </AiOutlineDelete>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
   currentUser: state.user.currentUser,
});

const dispatchToProps = (dispatch) => ( {
  Delet: (id) => dispatch(DeleteNote(id)),
});

export default connect(mapStateToProps,dispatchToProps)(Note);
