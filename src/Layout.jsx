import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Mikra from "./Components/Mikra";
import SeatForm from './Components/PlaceReservationForm';

const Layout = () => {
  const [showLegend, setShowLegend] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="font-sans" dir="rtl">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
      <button
          onClick={toggleForm}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          רכישת מקום
        </button>
        <button
          onClick={toggleLegend}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          מקרא
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          ניהול
        </button>
      </div>
      <div
        className={`transition-transform duration-500 ease-in-out transform ${
          showLegend ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 right-0 bg-yellow-100 p-4 shadow-lg z-50`}
      >
        <Mikra object={setShowLegend} />
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <SeatForm object={setShowForm}/>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Layout;
