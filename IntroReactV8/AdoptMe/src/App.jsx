import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";

// JSX version of App component  
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
        </div>
    );
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
