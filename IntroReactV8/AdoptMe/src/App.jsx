// Components are like rubber stamps that you can reuse to create elements
//   - Components are functions that return elements; components ae reusable and typically
//      made up of other components
//   - One way data flow: data flows from parent to child components
import ReactDOM from "react-dom";
import Pet from "./Pet";

// Your code is going to go here
// Always captialize component names
/*const App = () => {
  // App component that returns a div with h1
  return React.createElement(
    "div", // element to create
    {}, // attributes
    [
      React.createElement("h1", {}, "Adopt Me!"), // children
      React.createElement(Pet, {
        animal: "Dog",
        name: "Chewbaca",
        breed: "Hound Dog",
      }), // children
      React.createElement(Pet, {
        animal: "Guinea Pig",
        name: "Hoggio",
        breed: "Abyssinian",
      }), // children
      React.createElement(Pet, {
        animal: "Cat",
        name: "Harrier",
        breed: "Mixed",
      }), // children
    ]
  );
}; 
*/
// JSX version of App component  
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet animal="Dog" name="Chewbacca" breed="Hound Dog" />
            <Pet animal="Guinea Pig" name="Hoggio" breed="Abyssinian" />
            <Pet animal="Cat" name="Harrier" breed="Mixed" />
        </div>
    );
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
