import React, { useState } from 'react';

const PlaceSearch = () => {
  const [query, setQuery] = useState('');
  const [placeData, setPlaceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // REPLACE THIS with your actual API Key
  const API_KEY = 'AIzaSyAQFA-ijye-NCiMHCBc4-IeixbmYyICGl4'; 

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError(null);
    setPlaceData(null);

    try {
      const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress'
        },
        body: JSON.stringify({
          textQuery: query
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.places && data.places.length > 0) {
        setPlaceData(data.places[0]); // Get the first result
      } else {
        setError("No places found.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h2>Place ID Finder</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter place name (e.g. Amma Kitchen)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '8px', width: '70%', marginRight: '5px' }}
        />
        <button onClick={handleSearch} disabled={loading} style={{ padding: '8px' }}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {placeData && (
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>{placeData.displayName.text}</h3>
          <p><strong>Address:</strong> {placeData.formattedAddress}</p>
          <p style={{ wordBreak: 'break-all' }}>
            <strong>Place ID:</strong> <br />
            <code style={{ color: '#d63384', background: '#f1f1f1', padding: '2px 4px' }}>
              {placeData.id}
            </code>
          </p>
        </div>
      )}
    </div>
  );
};

export default PlaceSearch;