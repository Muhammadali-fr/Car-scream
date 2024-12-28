import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
// assets

import LazyImage from '../components/LazyImage';

function Home({cars,filteredCars,CarNotFound ,searchCar , setSearchCar}) {
  const navigate = useNavigate();

  console.log(filteredCars);

  return (
    <div className=" home w-full md:w-5/6 bg-white pt-16 md:ml-auto min-h-screen">
      <input
        value={searchCar}
        onChange={(e) => setSearchCar(e.target.value)}
        placeholder='Search car'
        className=' w-5/6 p-2 rounded border border-gray-500 bg-white text-black placeholder-gray-500  mt-8 mx-8'
        type="text"
      />


      <div>
        {filteredCars.length <= 0 ? (
          <div className='p-8 flex items-center justify-center gap-3'>
            <h1 className='text-xl font-bold text-gray-400'>Sorry, we're working on it</h1>
            <img className='w-20' src={CarNotFound} alt="CarNotFound" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {filteredCars.map((car, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 font-bold border border-white p-6 rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <LazyImage
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
                <p className="text-sm text-gray-500">{car.about}</p>
                <button
                  onClick={() => navigate(`/car/${car.name}`)}
                  className="bg-gray-300 w-full py-2 border border-white mx-auto my-3 hover:bg-gray-700 hover:text-white transition"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
