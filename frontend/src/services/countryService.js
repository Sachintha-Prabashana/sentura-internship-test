import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const countryService = {
  /**
   * Fetches all countries from the backend.
   * @returns {Promise<Array>} A promise that resolves to the list of countries.
   */
  getCountries: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/countries`);
      return response.data;
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw error;
    }
  }
};
