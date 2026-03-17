import React, { useState, useEffect } from 'react';
import { countryService } from '../services/countryService';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import CountryTable from '../components/CountryTable';
import CountryModal from '../components/CountryModal';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  // 1. Fetch Countries from Backend using Axios Service
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await countryService.getCountries();
        setCountries(data);
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
    <>
      <Header />
      <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CountryTable countries={filteredCountries} setSelectedCountry={setSelectedCountry} />
      <CountryModal selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
    </>
  );
};

export default Home;
