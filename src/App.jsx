import React, { useEffect, useState, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from './layout/MainLayout'
import Home from './pages/Home';
import CarDetails from './components/CarDetails';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './pages/Contact';

import gtrR34 from './assets/gtr-r34.jpg';
import ford from './assets/ford.jpg';
import supra from './assets/supra.jpg';
import audi from './assets/audi.jpg';
import mclarenF1 from './assets/mclaren-f1.jpg';
import bmwM3 from './assets/bmw-e46.jpg';
import mers from './assets/mers.jpg';
import mustang60 from './assets/mustang-60.jpg';
import paganiZonda from './assets/pagani-zonda.jpg';

import CarNotFound from './assets/car-not-found.svg';
import Logo from './pages/Logo';


function App() {
  const [searchCar, setSearchCar] = useState('');

  const [cars, setCars] = useState([
    {
      name: "GTR R34",
      about: "The Nissan Skyline GT-R is a Japanese sports car based on the Nissan Skyline range.",
      image: gtrR34,
      details: "The GTR R34, produced by Nissan, is renowned for its RB26DETT engine, all-wheel-drive system, and cutting-edge technology for its time.",
    },
    {
      name: "Ford Mustang",
      about: "The Ford Mustang is an iconic American sports car known for its muscle and style.",
      image: ford,
      details: "The Ford Mustang comes with powerful V8 engines and a legacy of American muscle cars that dates back to 1964.",
    },
    {
      name: "Toyota Supra",
      about: "The Toyota Supra is a legendary Japanese sports car with remarkable performance and design.",
      image: supra,
      details: "The Toyota Supra, especially the MK4, gained global fame for its 2JZ engine and its role in the Fast & Furious franchise.",
    },
    {
      name: "Audi R8",
      about: "The Audi R8 is a German supercar combining luxury and performance with a mid-engine layout.",
      image: audi,
      details: "The Audi R8 offers a V10 engine and Quattro all-wheel drive, delivering incredible performance and luxury.",
    },
    {
      name: "McLaren F1",
      about: "The McLaren F1 is a high-performance car famous for its innovative design and speed.",
      image: mclarenF1,
      details: "The McLaren F1 was the fastest car in the world in the 1990s, featuring a central driving position and a BMW V12 engine.",
    },
    {
      name: "BMW M3 GTR",
      about: "The BMW 3 Series (E46) is the fourth generation of passenger cars of the 3rd series of the German automaker BMW, produced from 1997 to 2003.",
      image: bmwM3,
      details: "A wide range of engines, five types of bodies to choose from, plus sports versions predetermined the success of this generation. A total of 3 266 885 cars were manufactured, the most in one series in the history of BMW.",
    },
    {
      name: "Mercedes cls 63 amg",
      about: "The Mercedes-Benz CLS 63 AMG is a high-performance luxury car from Mercedes' AMG division.",
      image: mers,
      details: "Engine: The CLS 63 AMG often comes equipped with a hand-built AMG V8 engine. Earlier models featured a 6.2L naturally aspirated V8, while later versions switched to a more efficient 5.5L twin-turbocharged V8."
    },
    {
      name: "The Ford Mustang",
      about: "The Ford Mustang from the 1960s is one of the most iconic American cars in automotive history.",
      image: mustang60,
      details: "1964–1966 (First Generation): The Mustang was first unveiled at the 1964 New York World's Fair. Its introduction sparked a new class of cars, the 'pony cars,' known for their compact size, sporty performance, and affordable price."
    },
    {
      name: "Pagani Zonda R",
      about: "The Pagani Zonda R is an iconic hypercar designed purely for the racetrack, making it one of the most extreme and high-performance vehicles ever built by Pagani Automobili.",
      image: paganiZonda,
      details: "Engine: A naturally aspirated 6.0-liter V12 engine derived from Mercedes-Benz AMG, delivering 750 horsepower and 710 Nm of torque.Chassis: The Zonda R boasts a carbon-titanium monocoque chassis, ensuring exceptional rigidity while keeping the car lightweight."
    },
  ]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchCar(searchCar.trim());
    }, 500); // Delay of 500ms for debouncing

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount or when search changes
  }, [searchCar]);

  // Memoized filtered cars
  const filteredCars = useMemo(() => {
    return cars.filter(car =>
      car.name.toLowerCase().includes(searchCar.toLowerCase())
    );
  }, [cars, searchCar]);

  console.log(filteredCars);


  return (
    <Router>
      <Routes>
        <Route path='/car/:name' element={<CarDetails />}></Route>
        <Route
          path='/header'
          element={
            <Header
              filteredCars={filteredCars}
              searchCar={searchCar}
              CarNotFound={CarNotFound}
              setSearchCar={setSearchCar}
            />
          }
        />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home cars={cars} filteredCars={filteredCars} searchCar={searchCar} CarNotFound={CarNotFound} setSearchCar={setSearchCar} />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/logo' element={<Logo />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App