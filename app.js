import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement
//     ("div", { id: "parent" },
//         React.createElement("div", { id: "child" },
//             [React.createElement("h1", { id: "heading" }, "Hello from the React world123🧨❤️"),
//             React.createElement("h1", { id: "heading" }, "Hello from the React world")]
//         ));
// console.log(heading, "heading is here");

//  *React Element *
// const jsxHeading=(
// <h1 id="heading">Hello from the JSXHeading</h1>
// );
const elem = <span>React Element</span>;
const title = ({ elem }, <h1>This is Title from React Element</h1>);
const Title = () => <h2>This is the Title from React Component</h2>;
//React component
const Heading = () =>
  <div className="container">
    <Title />
    {/* <Title></Title> */}
    {/* {Title()} */}
    {title}
    <h1>Hello this is from function component</h1>
    <h2>fkdsfjds</h2>
  </div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// root.render(jsxHeading);//Rendering the react element
root.render(<Heading />);
