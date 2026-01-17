import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./assets/logo.svg";
import user_icon from "./assets/user_icon.png";
import search_icon from "./assets/search_icon.png";

//                             1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a  div with class “title”)

/* 

const nestedHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Namaste React"),
  React.createElement("h2", {}, "Namaste React"),
  React.createElement("h3", {}, "Namaste React"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedHeader); 

//                                           2. Create the same element using JSX

/*

const Heading = (
  <div className="title">
    <h1> Namaste React from JSX</h1>
    <h2> Laying the Foundation </h2>
    <h3> Episode 03 </h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading); 

*/

//                                          3. Create a functional component of the same with JSX

/*

const Heading = () => {
  return (
    <div className="title">
      <h1> Namaste React from functional component</h1>
      <h2> Laying the Foundation </h2>
      <h3> Episode 03 </h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

*/

//                                            4.  Pass attributes into the tag in JSX

/*

const Heading = () => {
  return (
    <div className="title" id="main-title">
      <h1 style={{ color: "blue" }}>Namaste React</h1>
      <h2>Laying the Foundation</h2>
      <h3>Episode 03</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

*/

//                                             5. Composition of Component

/*

const CompositionComponent = () => {
  return <h1> Namaste React </h1>;
};
const Heading = () => {
  return (
    <div className="title">
      <CompositionComponent />
      <h1>by Akshay Saini</h1>
      <h2> Episode 03 </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

*/

//                        6. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

/*

const TitleComponent = () => {
  return <h1>Namaste React</h1>;
};

const Heading = () => {
  return (
    <div className="title">
      {TitleComponent}
      {<TitleComponent />}
      {<TitleComponent></TitleComponent>}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

*/

/*
NOTE: {TitleComponent} does not render because it is only a function reference, whereas
      <TitleComponent /> and <TitleComponent></TitleComponent> render the component by executing the function and returning JSX.

*/

//                7. Create a Header Component from scratch using Functional Components with JSX

/*
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice
*/

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <input className="search" type="text" placeholder="Search..." />
      <img src={search_icon} />
      <img src={user_icon} alt="user icon" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
