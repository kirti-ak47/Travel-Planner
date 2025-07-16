import axios from "axios";

export const getItinerary = async (formData) => {
  const response = await axios.post("/api/generateItinerary", formData);
  return response.data;
};
