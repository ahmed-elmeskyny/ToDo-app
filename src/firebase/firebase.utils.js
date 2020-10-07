import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var Config = {
  apiKey: "AIzaSyBtNavnMIBD9nDkmwZPeowGzgcjlrK6NuI",
  authDomain: "todo-app-437ab.firebaseapp.com",
  databaseURL: "https://todo-app-437ab.firebaseio.com",
  projectId: "todo-app-437ab",
  storageBucket: "todo-app-437ab.appspot.com",
  messagingSenderId: "113034564521",
  appId: "1:113034564521:web:e911d2bda1a43090182ab8",
};

export const createUserProfile = async (user, otherData) => {
  if (!user) {
    return;
  }
  const userRef = db.collection("users").doc(`${user.uid}`);
  const snapshot = await userRef.get();
  const createdAt = new Date();
  if (!snapshot.exists) {
    try {
      userRef.set({
        email: user.email,
        createdAt: createdAt,
        photoUrl: user.photoURL,
        ...otherData,
      });
    } catch {
      console.log("message");
    }
  }
  return userRef;
};

export const createTask = async (user, title, discription) => {
  const taskRef = db
    .collection("UsersData")
    .doc(`${user.id}`)
    .collection("UserTasks")
    .doc();
  const createdAt = new Date().toDateString();
  await taskRef.set({
    id: taskRef.id,
    title: title,
    discription: discription,
    createdAt: createdAt,
    isDone: false,
  });
  return taskRef;
};
export const createEvent = async (user, event, eventDate) => {
  const eventRef = db
    .collection("UsersData")
    .doc(`${user.id}`)
    .collection("UserEvents")
    .doc();
  const createdAt = new Date().toDateString();
  await eventRef.set({
    id: eventRef.id,
    event: event,
    eventDate: eventDate,
    createdAt: createdAt,
  });
  return eventRef;
};
export const createNote = async (user, note) => {
  const noteRef = db
    .collection("UsersData")
    .doc(`${user.id}`)
    .collection("UserNotes")
    .doc();
  const createdAt = new Date().toDateString();
  await noteRef.set({
    id: noteRef.id,
    createdAt: createdAt,
    note: note,
  });
  return noteRef;
};

firebase.initializeApp(Config);

export const db = firebase.firestore();
export const auth = firebase.auth();
