import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { plantsData } from '../data/plantsData';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate()

  const fuse = new Fuse(plantsData, {
    keys: ['name', 'description'],
    includeScore: true,
  });

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const results = fuse.search(query);
      setSearchResults(results.map(result => result.item));
    } else {
      setSearchResults([]);
    }
  };

const onClickHandler = (plant) => {
  const plantName = plant.name.toLowerCase().replace(/ /g, "-");
  navigate(`/plants/${plantName}`);
};
  return (
    <div className="relative w-full max-w-md mx-auto mt-4 z-50">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search plants..."
      />
      {searchResults.length > 0 && (
        <ul className="absolute bg-white shadow-lg rounded-lg p-2 w-full max-h-64 overflow-y-auto">
          {searchResults.map((plant, index) => (
            <li key={index} onClick={() => onClickHandler(plant)} className="p-2 hover:bg-gray-200">
             
              <h3 className="font-bold">{plant.name}</h3>
              {/* <p>{plant.description}</p> */}
          
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
