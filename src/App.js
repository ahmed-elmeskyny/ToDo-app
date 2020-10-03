import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import SideProfile from "./Components/side-profile/side-profile";

class App extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Header></Header>
        <SideProfile></SideProfile>
      </div>
    );
  }
}

export default App;
