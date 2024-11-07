// ReservationContext.js
import React, { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

export const useReservation = () => {
  return useContext(ReservationContext);
};

export const ReservationProvider = ({ children }) => {
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const handleReservationSuccess = () => {
    console.log("ההזמנה בוצעה בהצלחה!");
    setReservationSuccess(true);
  };

  return (
    <ReservationContext.Provider value={{ handleReservationSuccess, reservationSuccess }}>
      {children}
    </ReservationContext.Provider>
  );
};
