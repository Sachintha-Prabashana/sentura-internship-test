import React from 'react';

const CountryTable = ({ countries, setSelectedCountry }) => {
  return (
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
          {countries.map((country, index) => (
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
  );
};

export default CountryTable;
