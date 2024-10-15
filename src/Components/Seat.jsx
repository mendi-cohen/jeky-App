import React from 'react';

const Seat = ({ name, small, color, status }) => {
  const baseClasses = `p-1 text-center text-xs ${small ? "w-10" : "w-16"} h-10 flex flex-col items-center justify-center overflow-hidden transition-all duration-300`;

  const colors = {
    green: '#4ade80',
    blue: '#60a5fa',
    yellow: '#facc15',
    red: '#ff0000'
  };

  const selectedColor = colors[color] || colors.green;

  return (
    <div
      className={`${baseClasses} bg-white rounded-md border`}
      style={{
        color: selectedColor,
        borderColor: selectedColor,
        boxShadow: `0 0 5px ${selectedColor}, 0 0 10px ${selectedColor}, 0 0 15px ${selectedColor}`,
      }}
    >
      <div>{name}</div>
      {status && <div className="text-[8px]">{status}</div>}
    </div>
  );
};

export default Seat;