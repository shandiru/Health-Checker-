import React, { useState, useRef } from 'react';

const PlaceReviewCarousel = () => {
  const [query, setQuery] = useState('');
  const [placeData, setPlaceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter5Star, setFilter5Star] = useState(false);
  
  // Carousel-ஐ நகர்த்த useRef தேவை
  const carouselRef = useRef(null);

  const API_KEY = 'AIzaSyAQFA-ijye-NCiMHCBc4-IeixbmYyICGl4'; 

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; // ஒரு கார்டின் அகலம் + இடைவெளி
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const searchRes = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'places.id'
        },
        body: JSON.stringify({ textQuery: query })
      });

      const searchData = await searchRes.json();
      const id = searchData.places?.[0]?.id;
      if (!id) throw new Error("Place not found");

      const detailRes = await fetch(`https://places.googleapis.com/v1/places/${id}`, {
        headers: {
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'displayName,reviews,rating,userRatingCount'
        }
      });

      const details = await detailRes.json();
      setPlaceData(details);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reviewsToDisplay = filter5Star 
    ? placeData?.reviews?.filter(r => r.rating === 5) 
    : placeData?.reviews;

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Search Bar */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ display: 'inline-flex', gap: '10px', background: 'white', padding: '10px', borderRadius: '50px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <input 
              style={{ padding: '10px 20px', width: '300px', border: 'none', outline: 'none', borderRadius: '50px' }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Business Name..."
            />
            <button onClick={handleSearch} style={{ padding: '10px 25px', borderRadius: '50px', border: 'none', backgroundColor: '#4285F4', color: 'white', cursor: 'pointer' }}>
              {loading ? '...' : 'Search'}
            </button>
          </div>
        </div>

        {placeData && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <h2>{placeData.displayName?.text}</h2>
              <button onClick={() => setFilter5Star(!filter5Star)} style={{ cursor: 'pointer' }}>
                {filter5Star ? 'Show All' : 'Show 5★ Only'}
              </button>
            </div>

            {/* Buttons & Carousel */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              
              {/* Left Arrow */}
              <button onClick={() => scroll('left')} style={arrowStyle}>❮</button>

              {/* The Carousel */}
              <div 
                ref={carouselRef}
                style={{ 
                  display: 'flex', 
                  overflowX: 'hidden', // Buttons மூலம் மட்டும் நகர்த்த
                  scrollBehavior: 'smooth',
                  gap: '20px', 
                  padding: '20px 0',
                  width: '100%'
                }}
              >
                {reviewsToDisplay?.map((rev, i) => (
                  <div key={i} style={cardStyle}>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                      <img src={rev.authorAttribution?.photoUri} style={{ width: '40px', borderRadius: '50%' }} alt="" />
                      <span style={{ fontWeight: 'bold' }}>{rev.authorAttribution?.displayName}</span>
                    </div>
                    <div style={{ color: '#f1c40f' }}>{"★".repeat(rev.rating)}</div>
                    <p style={{ fontSize: '14px', color: '#333' }}>{rev.text?.text?.substring(0, 150)}...</p>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button onClick={() => scroll('right')} style={arrowStyle}>❯</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  minWidth: '300px',
  background: 'white',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  flexShrink: 0
};

const arrowStyle = {
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  zIndex: 10,
  fontSize: '20px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
};

export default PlaceReviewCarousel;