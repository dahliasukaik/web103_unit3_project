import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

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

// Function to get events by location ID
export const getEventsByLocationId = async (locationId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/locations/${locationId}/events`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching events for location ${locationId}:`, error);
    throw error;
  }
};

// **Add the getEventById function**
export const getEventById = async (eventId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with id ${eventId}:`, error);
    throw error;
  }
};
