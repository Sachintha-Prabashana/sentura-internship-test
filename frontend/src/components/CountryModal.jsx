import React from 'react';

const CountryModal = ({ selectedCountry, setSelectedCountry }) => {
  if (!selectedCountry) return null;

  return (
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
  );
};

export default CountryModal;
