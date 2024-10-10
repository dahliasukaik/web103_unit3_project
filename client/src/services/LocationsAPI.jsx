import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update this if your server is hosted elsewhere

// Function to get all locations
export const getAllLocations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/locations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
};

// Function to get a single location by ID
export const getLocationById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/locations/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching location with id ${id}:`, error);
        throw error;
    }
};
