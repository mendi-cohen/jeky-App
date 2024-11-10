import React, { useState, useEffect } from "react";
import { useReservation } from "../Contexts/Success";

const PlaceReservationForm = ({ object }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const { handleReservationSuccess } = useReservation();
  const [image, setImage] = useState(null);

  const close = () => {
    object(false);
  };

  const handleRemoveSeat = (seatId) => {
    setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    setTotalPrice(totalPrice - 150);
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
        console.error("Seats data is not an array:", data);
      }
    } catch (error) {
      console.error("Failed to fetch seats:", error);
    }
  };

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
      setTotalPrice(totalPrice - 150);
    } else {
      if (selectedSeats.length < 3) {
        setSelectedSeats([...selectedSeats, seat.id]);
        setTotalPrice(totalPrice + 150);
      } else {
        alert("אפשר לבחור עד 3 מקומות בלבד.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedSeats.length === 0) {
      alert("עליך לבחור לפחות מקום אחד.");
      return;
  }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("birthdate", birthdate);
    formData.append("totalPrice", totalPrice);
    if (image) {
      formData.append("image", image);
    }
    formData.append("selectedSeats", JSON.stringify(selectedSeats));

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/users/addUser`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Reservation successful:", data);
        handleReservationSuccess();
        alert("הכיסא נרכש בהצלחה!");
        close();
      } else {
        const errorData = await response.json();
        console.error("Failed to reserve seat:", errorData);
        alert(errorData.message || "אירעה שגיאה בביצוע ההזמנה");
      }
    } catch (error) {
      console.error("Error during reservation:", error);
      alert("אירעה שגיאה בביצוע ההזמנה");
    }
  };

  const filteredSeats = seats.filter(
    (seat) =>
      seat.color === "green" &&
      seat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative p-8 bg-gray-100 rounded shadow-md"
        dir="rtl" 
      >
        <button
          onClick={close}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl"
        >
          ✕
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
          <label className="block text-sm font-bold mb-2">
            תאריך יום הולדת:
          </label>
          <input
            type="text"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="למשל ז אדר"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            בחירת מקום (עד 3 מקומות):
          </label>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            בחר מקום
          </button>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedSeats.map((seatId) => {
              const seat = seats.find((s) => s.id === seatId);
              return (
                <div
                  key={seatId}
                  className="flex items-center bg-blue-200 text-blue-700 px-2 py-1 rounded mb-1"
                >
                  <span>{seat ? seat.name : "כיסא לא נמצא"}</span>
                  <button
                    onClick={() => handleRemoveSeat(seatId)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    &times;
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">סך הכל לתשלום:</label>
          <p className="text-lg font-semibold">{totalPrice} ₪</p>
        </div>
        <a
          href="https://payboxapp.page.link/JM39HhTUjwttGPf49"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          לחץ כאן לתשלום בפייבוקס
        </a>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            הוסף צילום מסך של התשלום בפייבוקס:
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-20 rounded"
        >
          שלח
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-lg w-11/12 mx-4">
            <h2 className="text-lg font-bold mb-2">בחר מקום (עד 3):</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="חפש מקום"
              className="w-full p-2 border rounded mb-2"
            />
            <div className="max-h-60 overflow-y-auto">
              {filteredSeats.length > 0 ? (
                <ul className="space-y-2">
                  {filteredSeats.map((seat) => (
                    <li
                      key={seat.id}
                      onClick={() => handleSeatSelect(seat)}
                      className={`cursor-pointer hover:bg-gray-200 p-2 rounded ${
                        selectedSeats.includes(seat.id) ? "bg-blue-100" : ""
                      }`}
                    >
                      {seat.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  לא נמצאו תוצאות
                </p>
              )}
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full"
            >
              סגור
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceReservationForm;
