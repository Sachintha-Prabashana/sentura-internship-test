import React from 'react';

const SearchSection = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search by country name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchSection;
