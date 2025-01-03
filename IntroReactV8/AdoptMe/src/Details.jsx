import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";


const Details = () => {
    const { id } = useParams(); {/* useParams is a hook that allows you to access the parameters of the current route */}
    const results = useQuery(["details", id], fetchPet); {/* first check if data is in cache with key ["details", id]; if not, fetch it */}
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [, setAdoptedPet] = useContext(AdoptedPetContext);

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
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
                <button onClick={()=> setShowModal(true)}>Adopt {pet.name}</button>
                <p>{pet.description}</p>
                {showModal ? (
                      <Modal>
                        <div>
                            <h1> Would you like to adopt {pet.name}?</h1>
                            <div className="Buttons">
                                <button onClick={() => {
                                    setAdoptedPet(pet);
                                    navigate("/");
                                }}
                                >
                                    Yes
                                </button>
                                <button onClick={() => setShowModal(false)}>No</button>
                            </div>
                        </div>
                      </Modal>
                  ) : null}
            </div>
        </div>
    );
};

export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
