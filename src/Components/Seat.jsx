import React from 'react';

const Seat = ({ name, small, color, status }) => {


  const baseClasses = `p-1 text-center text-xs h-10 ${
    small ? "w-10" : "w-16"
  } flex flex-col items-center justify-center overflow-hidden transition-all duration-300`;

  const colors = {
    green: '#4ade80',
    blue: '#60a5fa',
    yellow: '#facc15',
    red: '#ff0000'
  };

  const selectedColor = colors[color] || colors.green;

  const neonClasses = `${baseClasses} bg-white rounded-md border shadow-[0_0_5px_${selectedColor},0_0_10px_${selectedColor},0_0_15px_${selectedColor}]
    hover:shadow-[0_0_5px_#86efac,0_0_10px_#86efac,0_0_15px_#86efac]`;



  return (
    <div
      className={neonClasses}
      style={{
        color: selectedColor,
        borderColor: selectedColor
      }}
    >
      <div>{name}</div>
      {status && <div className="text-[8px]">{status}</div>}
    </div>
  );
};

export default Seat;