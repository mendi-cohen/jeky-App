import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Mikra from "./Components/Mikra";
import SeatForm from './Components/PlaceReservationForm';

const Layout = () => {
  const [showLegend, setShowLegend] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      setIsPortrait(portrait);
    };

    checkOrientation();
    const portraitMql = window.matchMedia("(orientation: portrait)");
    
    if (portraitMql.addEventListener) {
      portraitMql.addEventListener('change', checkOrientation);
    } else {
      portraitMql.addListener(checkOrientation);
    }

    return () => {
      if (portraitMql.removeEventListener) {
        portraitMql.removeEventListener('change', checkOrientation);
      } else {
        portraitMql.removeListener(checkOrientation);
      }
    };
  }, []);

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="font-sans min-h-screen w-full overflow-x-auto" dir="rtl">
      {isPortrait && (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white flex items-center justify-center z-50 p-4">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 transform rotate-90">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="currentColor"
                  d="M7.5 21h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9c-.83 0-1.5.67-1.5 1.5v13c0 .83.67 1.5 1.5 1.5zm9.5-16h-10v14h10V5z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">אנא סובב את המכשיר</h2>
            <p>לחוויה מיטבית, יש להשתמש במצב לרוחב</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="sticky top-0 z-40 w-full bg-gray-200 shadow-md">
        <div className="flex justify-between items-center px-4 py-2 max-w-[2000px] mx-auto">
          <div className="flex gap-4 w-full justify-between">
            <button
              onClick={toggleForm}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors min-w-[120px]"
            >
              רכישת מקום
            </button>
            <button
              onClick={toggleLegend}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors min-w-[120px]"
            >
              מקרא
            </button>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors min-w-[120px]"
            >
              ניהול
            </button>
          </div>
        </div>
      </div>

      <div className="h-screen overflow-x-auto overflow-y-auto">
        {/* Legend panel */}
        <div
          className={`fixed top-0 left-0 right-0 bg-yellow-100 p-4 shadow-lg z-50 transition-all duration-300 ease-in-out ${
            showLegend ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Mikra object={setShowLegend} />
        </div>

        {/* Form modal */}
        {showForm && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-50 m-4 max-h-[90vh] overflow-auto">
              <SeatForm object={setShowForm} />
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="w-[2000px] p-4 overflow-x-auto">
          <div className="max-w-screen-2xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
