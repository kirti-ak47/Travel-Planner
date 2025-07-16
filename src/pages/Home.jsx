import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';

function Home(){

const[formData, setFormData] = useState({
    origin: '',
    Destination: '',
    Start_date: '',
    End_date: '',
    budget: '',
    interests: '',
    
});

const navigate = useNavigate();

const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/result', {state: { formData } });
};

    return(
        <div className="container mt-5">
            <h2 className="text-center mb-4">AI Travel Planner</h2>
            <InputForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Home;