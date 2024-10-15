import React, { useState, useEffect } from 'react';

const PlaceReservationForm = ({ object }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const close = () => {
    object(false);
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  const fetchSeats = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/getAllSeats`);
      const data = await response.json();
      if (data.Seats && Array.isArray(data.Seats)) {
        setSeats(data.Seats);
      } else {
        console.error('Seats data is not an array:', data);
      }
    } catch (error) {
      console.error('Failed to fetch seats:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Birthdate:', birthdate);
    console.log('Selected Seat:', selectedSeat);
  };

  return (
    <form onSubmit={handleSubmit} className="relative p-8 bg-gray-100 rounded shadow-md">
      <button
        onClick={close}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl"
      >
        ✕ {/* זה האיקס */}
      </button>
      
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">שם:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="הכנס שם"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">תאריך יום הולדת:</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">בחירת מקום:</label>
        <select
          value={selectedSeat}
          onChange={(e) => setSelectedSeat(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">בחר מקום</option>
          {seats
            .filter((seat) => seat.color === 'blue')
            .map((seat) => (
              <option key={seat.id} value={seat.id}>
                {seat.name || `מקום ${seat.id}`}
              </option>
            ))}
        </select>
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-20 rounded">
        שלח
      </button>
    </form>
  );
};

export default PlaceReservationForm;
