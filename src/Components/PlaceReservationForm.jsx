import React, { useState, useEffect } from 'react';

const PlaceReservationForm = ({ object }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]); // מערך למקומות שנבחרו
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isModalOpen, setModalOpen] = useState(false); // מצב המודל
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSeatSelect = (seat) => {
    // אם המושב כבר נבחר, נסיר אותו מהנבחרים
    if (selectedSeats.includes(seat.name)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat.name));
    } else {
      // אם לא נבחרו 3 מושבים, נוסיף את המושב הנבחר
      if (selectedSeats.length < 3) {
        setSelectedSeats([...selectedSeats, seat.name]);
      } else {
        alert('אפשר לבחור עד 3 מקומות בלבד.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Birthdate:', birthdate);
    console.log('Selected Seats:', selectedSeats);
  };

  // פילטרינג של הכיסאות על פי טקסט החיפוש
  const filteredSeats = seats.filter(seat =>
    seat.color === 'color1' && seat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
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
            type="text"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="למשל ז' אדר"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">בחירת מקום (עד 3):</label>
          <button type="button" onClick={() => setModalOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            בחר מקום
          </button>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedSeats.map((seat) => (
              <div key={seat} className="flex items-center bg-blue-200 text-blue-700 px-2 py-1 rounded">
                <span>{seat}</span>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-20 rounded">
          שלח
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-lg w-50">
            <h2 className="text-lg font-bold mb-2">בחר מקום (עד 3):</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="חפש מקום"
              className="w-full p-2 border rounded mb-2"
            />
            <div className="max-h-60 overflow-y-auto">
              <ul>
                {filteredSeats.map(seat => (
                  <li 
                    key={seat.id} 
                    onClick={() => handleSeatSelect(seat)} 
                    className={`cursor-pointer hover:bg-gray-200 p-2 rounded ${selectedSeats.includes(seat.name) ? 'bg-blue-100' : ''}`}
                  >
                    {seat.name}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={() => setModalOpen(false)} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              סגור
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceReservationForm;
