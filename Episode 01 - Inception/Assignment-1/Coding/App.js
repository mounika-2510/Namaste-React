// Q2): Build your `first Hello World` program using JavaScript DOM

/*
const heading = document.createElement("h1");
heading.textContent = "Hello World using JavaScript DOM";

const root = document.getElementById("root");
root.appendChild(heading);
*/

// Q3): Build your `first Hello World` program using React

const heading = React.createElement("h1", {}, "Hello World using React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
