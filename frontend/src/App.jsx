import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  // 1. Fetch Countries from Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/countries');
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // 2. Client-side Search Logic
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="header">
        <h1>Country Explorer</h1>
        <p className="subtitle">Sentura Technologies Practical Test</p>
      </header>

      {/* Search Input Box */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by country name..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Countries Table */}
      <div className="table-wrapper">
        <table className="country-table">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {filteredCountries.map((country, index) => (
              <tr key={index} onClick={() => setSelectedCountry(country)}>
                <td className="flag-cell">
                  <img src={country.flag} alt={`${country.name} flag`} />
                </td>
                <td className="name-cell">{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>{country.population.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal / Popup for Details */}
      {selectedCountry && (
        <div className="modal-overlay" onClick={() => setSelectedCountry(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-icon" onClick={() => setSelectedCountry(null)}>&times;</button>
            <img src={selectedCountry.flag} alt="flag" className="modal-flag" />
            <h2>{selectedCountry.name}</h2>
            <div className="modal-info">
              <p><strong>Capital:</strong> {selectedCountry.capital}</p>
              <p><strong>Region:</strong> {selectedCountry.region}</p>
              <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
            </div>
            <button className="close-btn" onClick={() => setSelectedCountry(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;