import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
    defaultMethod: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});
// JSX version of App component  
const App = () => {
    const adpotedPet = useState(null); // passing entire hook (useState) as value
    return (
        <div>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <AdoptedPetContext.Provider value={adpotedPet}>
                        <header>
                            <Link to="/">Adopt Me!</Link>
                        </header>
                        <Routes>
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </AdoptedPetContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
