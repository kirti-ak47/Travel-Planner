import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { getItinerary } from "../services/api";


function Results(){
    const location = useLocation();
    const { formData } = location.state || {};

    const [itinerary, setItinerary] = useState('');
    const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchItinerary(){
        try{
            const response = await getItinerary(formData);
            setItinerary(response.itinerary);
        } catch (error) {
            console.error('Error fetching itinerary:', error);
            setItinerary('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }
    if (formData) fetchItinerary();
}, [formData]);

    return(
        <div className="container mt-5">
            <h2>Your AI-Generated Travel Plan is here!</h2>
            {loading ? (
                <p>Loading itinerary...</p>
            ) : (
               <div className="card p-3 bg-light">
                <pre style = {{ whiteSpace: "pre-wrap"}}>{itinerary}</pre>
               </div> 
            )}
        </div>
    );
};

export default Results;