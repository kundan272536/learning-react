const heading = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hello from the React world"),React.createElement("h1", { id: "heading" }, "Hello from the React world")]
        ));
console.log(heading, "heading is here");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(heading);