import axios from 'axios';

// Base URLs
const BASE_URL = "https://startupworld.in";
const BASE_URL1 = "https://smartcookie.in/";
const BASE_URL2 = "https://dev.startupworld.in/";

// API Key (if needed)
const API_KEY = "efc10cqkr4Ta29EIcYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u";

// Create Axios instances
const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 120000, // 120 seconds timeout
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}` // If API needs authentication
    }
});

const apiClient1 = axios.create({
    baseURL: BASE_URL1,
    timeout: 120000,
    headers: {
        "Content-Type": "application/json",
    }
});

const apiClient2 = axios.create({
    baseURL: BASE_URL2,
    timeout: 120000,
    headers: {
        "Content-Type": "application/json",
    }
});

// Export clients
export { apiClient, apiClient1, apiClient2 };
