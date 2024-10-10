import React from 'react';
import { Outlet } from 'react-router-dom';








const Layout = () =>{




  
  
  return (
  <div className="font-sans" dir="rtl">
    <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
    
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        רכישת מקום
      </button> 
      
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        ניהול
      </button>
    </div>
    <Outlet/>
    </div>






)};

export default Layout;