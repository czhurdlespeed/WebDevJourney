import { useQuery } from "@tanstack/react-query";
import { useParams} from "react-router-dom";
import fetchPet from "./fetchPet";
const Details = () => {
    const { id } = useParams(); {/* useParams is a hook that allows you to access the parameters of the current route */}
    const results = useQuery(["details", id], fetchPet); {/* first check if data is in cache with key ["details", id]; if not, fetch it */}

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const pet = results.data.pets[0];


    return (
        <div className="details">
            <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
        </div>
    );
};

export default Details;
