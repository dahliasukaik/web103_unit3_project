import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update this if your server is hosted elsewhere

// Function to get all events
export const getAllEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

// Function to get a single event by ID
export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};
