import React, { useState } from "react";


function InputForm({formData, setFormData, handleSubmit}){

    function handleChange(event){
        const {name, value} = event.target;
        setFormData({...formData, [name] : value});
    };

    return(
        <form onSubmit ={handleSubmit}>
            <div className="mb-3">
                 <label className="form-label">Origin</label>
                 <input type="text" 
                 name="origin"
                 className="form-control" placeholder="origin" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                 <label className="form-label">Destination</label>
                 <input type="text" 
                 name ="Destination"
                 className="form-control" placeholder="e.g Jaipur" onChange={handleChange} required />
            </div>

            <div class="row">
                <div className="col">
                    <label>Start Date</label>
                    <input type="date" 
                    name ="Start_date" className="form-control" placeholder="Start date" onChange={handleChange} required />
                </div>
                <label>End Date</label>
                <div className="col">
                    <label>End Date</label>
                    <input type="date" 
                    name ="End_date" className="form-control" placeholder="End date" onChange={handleChange} required />
                </div>
            </div>
            <div className="mb-3">
                 <label className="form-label">Budget</label>
                 <input type="text" 
                 name="Budget"
                 className="form-control" placeholder="in INR" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                 <label className="form-label">Interests</label>
                 <input type="text" 
                 name="Interests"
                 className="form-control"  placeholder="e.g Culture, Heritage, Beaches, Food" onChange={handleChange} required/>
            </div>
            <button type ="submit" className="btn btn-primary">Get Travel Plan</button>
        </form>
    );
};
export default InputForm;