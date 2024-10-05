import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() { // this method is called whenever there is an error in the component
        return { hasError: true };
    }

    cmoponentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h2> 
                  There was an error with this listing. <Link to="/">Click here</Link>
                to go back to the home page.
                </h2>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
