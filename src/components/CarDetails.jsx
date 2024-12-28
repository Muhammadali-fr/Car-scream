import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Autoplay styles
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { useParams } from 'react-router-dom';

// assets
import gtrR34 from '../assets/gtr-r34.jpg';
import gtrR34Side from '../assets/gtr-r34-side.jpg'
import gtrR34Back from '../assets/gtr-r34-back.jpg'
import gtrR34Salon from '../assets/gtr-r34-salon.jpg'
import gtrR34Sound from '../assets/gtr-r34-sound.mp3'


import ford from '../assets/ford.jpg';
import fordSide from '../assets/ford-side.jpg';
import fordBack from '../assets/ford-back.jpg';
import fordSalon from '../assets/ford-salon.jpg';
import fordSound from '../assets/ford-sound.mp3';


import supra from '../assets/supra.jpg';
import supraSide from '../assets/supra-side.jpg';
import supraBack from '../assets/supra-back.jpg';
import supraSalon from '../assets/supra-salon.jpg';
import supraSound from '../assets/supra-sound.mp3';


import audi from '../assets/audi.jpg';
import audiSide from '../assets/audi-side.jpg';
import audiBack from '../assets/audi-back.jpg';
import audiSalon from '../assets/audi-salon.jpg';
import audiSound from '../assets/audi-sound.mp3';

import mclarenF1 from '../assets/mclaren-f1.jpg';
import mclarenF1Side from '../assets/mclaren-f1-side.jpg';
import mclarenF1Back from '../assets/mclaren-f1-back.jpg';
import mclarenF1Salon from '../assets/mclaren-f1-salon.jpg';
import mclarenF1Sound from '../assets/mclaren-f1-sound.mp3';

import bmwM3 from '../assets/bmw-e46.jpg'
import bmwM3Side from '../assets/bmw-e46-side.jpg'
import bmwM3Back from '../assets/bmw-e46-back.jpg'
import bmwM3Salon from '../assets/bmw-e46-salon.jpg'
import bmwM3Sound from '../assets/bmw-e46-sound.mp3'

import mers from '../assets/mers.jpg'
import mersSide from '../assets/mers-side.jpg'
import mersBack from '../assets/mers-back.jpg'
import mersSound from '../assets/mers-sound.mp3'
import mersSalon from '../assets/mers-salon.jpg'


import mustang60 from '../assets/mustang-60.jpg'
import mustang60Side from '../assets/mustang-60-side.jpg'
import mustang60Back from '../assets/mustang-60-back.jpg'
import mustang60Salon from '../assets/mustang-60-salon.jpg'
import mustang60Sound from '../assets/mustang-60-sound.mp3'

import paganiZonda from '../assets/pagani-zonda.jpg';
import paganiZondaSide from '../assets/pagani-zonda-side.jpg';
import paganiZondaBack from '../assets/pagani-zonda-back.jpg';
import paganiZondaSalon from '../assets/pagani-zonda-salon.jpg';
import paganiZondaSound from '../assets/pagani-zonda-sound.mp3';

import Header from './Header';

function CarDetails() {
    const { name } = useParams();

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '" style=""></span>';

        },
    };

    const cars = [
        {
            name: "GTR R34",
            image: gtrR34,
            details: "The GTR R34, produced by Nissan, is renowned for its RB26DETT engine, all-wheel-drive system, and cutting-edge technology for its time.",
            images: [gtrR34, gtrR34Side, gtrR34Back],
            bar: gtrR34Salon,
            sound: gtrR34Sound,
            comfort: 'After a 16-year hiatus, the GT-R name was revived in 1989 as the BNR32 ("R32") Skyline GT-R. Group A specification versions of the R32 GT-R were used to win the Japanese Touring Car Championship for four years in a row. The R32 GT-R also had success in the Australian Touring Car Championship, with Jim Richards using it to win the championship in 1991 and Mark Skaife doing the same in 1992, until a regulation change excluded the GT-R in 1993. The technology and performance of the R32 GT-R prompted the Australian motoring publication Wheels to nickname the GT-R "Godzilla" in its July 1989 edition.[1][2] Wheels then carried the name through all the generations of Skyline GT-Rs, most notably the R34 GT-R, which they nicknamed "Godzilla Returns", and described as "The best handling car we have ever driven". In tests conducted by automotive publications, R34 GT-R have covered a quarter of a mile  (402 metres) in 12.2 seconds from a standing start time and accelerated from 0–100 km/h (0–62 mph) in 4.4 seconds. '
        },
        {
            name: "Ford Mustang",
            image: ford,
            details: "The Ford Mustang comes with powerful V8 engines and a legacy of American muscle cars that dates back to 1964.",
            images: [ford, fordSide, fordBack],
            bar: fordSalon,
            sound: fordSound,
            comfort: 'The GT version distinguishes 4.6 L SOHC "Modular" V8 with 3 valves per cylinder and a VCT gas distribution phase change system, which produces 300 liters. c. (224 kW), modified suspension settings, large fog lights in the radiator grille and double exhaust behind. In the 2005 version, the approximate ratio of the weight to power is 11.5 pounds on horsepower. Although the GT is equipped with the same automatic transmission as the V6 model, it is optionally possible to install the 5-speed manual gearbox Tremec 3650, with which you can use the additional power of the GT model more rationally. It is worth mentioning the versions of the "Shelby GT-H" (2006–2007), Shelby GT (2007-2008) as a subclass of the GT version with a slight increase in power and a certain design package, and the Shelby GT500, sold since May 2006, equipped with a 5.4L 500-liter engine. c. (370 kW). '
        },
        {
            name: "Toyota Supra",
            image: supra,
            details: "The Toyota Supra, especially the MK4, gained global fame for its 2JZ engine and its role in the Fast & Furious franchise.",
            images: [supra, supraSide, supraBack],
            bar: supraSalon,
            sound: supraSound,
            comfort: 'The Fourth Generation A80 Toyota Supra, 1997 Toyota Supra A80, rear view The fourth generation Supra uses the chassis of the JZZ30 Soarer model (alaltorted as the Lexus SC300/400 model). It was fitted engines 2JZ-GE (atmospheric, 225 liters. p.) and 2JZ-GTE (turbo, 280 l. s. for Japan and Europe) Originally stood on the Toyota Aristo or a Lexus GS. The most powerful 2JZ-GTE engine was supplied with 330 liters. s. A series of 2JZ-GTE engines is well amenable to improvements associated with increasing power. '
        },
        {
            name: "Audi R8",
            image: audi,
            details: "The Audi R8 offers a V10 engine and Quattro all-wheel drive, delivering incredible performance and luxury.",
            images: [audi, audiSide, audiBack],
            bar: audiSalon,
            sound: audiSound,
            comfort: "The car is exclusively designed, developed, and manufactured by Audi AG's private subsidiary company manufacturing high performance automotive parts, Audi Sport GmbH (formerly quattro GmbH),[4] and is based on the Lamborghini Gallardo and presently the Huracán platform.[5] The fundamental construction of the R8 is based on the Audi Space Frame,[2] and uses an aluminium monocoque which is built using space frame principles. The car is built by Audi Sport GmbH in a newly renovated factory at Audi's 'aluminium site' at Neckarsulm in Germany.[2] At the time it was introduced in 2006, the R8 became the first production car with full-LED headlamps.[6]"
        },
        {
            name: "McLaren F1",
            image: mclarenF1,
            details: "The McLaren F1 was the fastest car in the world in the 1990s, featuring a central driving position and a BMW V12 engine.",
            images: [mclarenF1, mclarenF1Side, mclarenF1Back],
            bar: mclarenF1Salon,
            sound: mclarenF1Sound,
            comfort: "The McLaren F1 is a sports car designed and manufactured by British automobile manufacturer McLaren Cars and powered by the BMW S70/2 V12 engine, of which a limited number was produced. The original concept was conceived by Gordon Murray, who successfully convinced Ron Dennis to back the project and hired car designer Peter Stevens to design the exterior and interior of the car. On 31 March 1998, the XP5 prototype with a modified rev limiter set the Guinness World Record for the world's fastest production car, reaching 240.1 mph (386.4 km/h),[6] surpassing the Jaguar XJ220's 217.1 mph (349.4 km/h) record from 1992 achieved with an increased rev limit and catalytic converters removed. "
        },
        {
            name: "BMW M3 GTR",
            about: "The BMW 3 Series (E46) is the fourth generation of passenger cars of the 3rd series of the German automaker BMW, produced from 1997 to 2003. ",
            image: bmwM3,
            details: "A wide range of engines, five types of bodies to choose from, plus sports versions predetermined the success of this generation. A total of 3 266 885 cars were manufactured, the most in one series in the history of BMW.",
            images: [bmwM3, bmwM3Side, bmwM3Back],
            bar: bmwM3Salon,
            sound: bmwM3Sound,
            comfort: 'The BMW M3 E46 debuted in October 2000. The new generation of the car managed to get rid of 110 kg of weight, which, coupled with the re-enterified chassis, gave a noticeable reduction in the handling of the car. It was put in the DTM racing series in 2003. It was equipped at that time with an S54B32 engine of 343 liters. c. at 8700 pp., 6-speed manual gear with double clutter node, also the transmission was equipped with a light racing flywheel, the Brembo brake system with a uniform distribution of braking forces, but most of the effort went to the front axis, brake discs are equipped with perforation and ventilation, brake pads ceramic with a set of tita.'
        },
        {
            name: "Mercedes cls 63 amg",
            about: "The Mercedes-Benz CLS 63 AMG is a high-performance luxury car from Mercedes' AMG division. ",
            image: mers,
            details: "Engine: The CLS 63 AMG often comes equipped with a hand-built AMG V8 engine. Earlier models featured a 6.2L naturally aspirated V8, while later versions switched to a more efficient 5.5L twin-turbocharged V8.",
            images: [mers, mersSide, mersBack],
            bar: mersSalon,
            sound: mersSound,
            comfort: "Engine: The CLS 63 AMG often comes equipped with a hand-built AMG V8 engine. Earlier models featured a 6.2L naturally aspirated V8, while later versions switched to a more efficient 5.5L twin-turbocharged V8.Power Output: Depending on the model year and version, power ranges from approximately 500 to 577 horsepower, with torque exceeding 700 Nm.Acceleration: The car can sprint from 0-100 km/h in around 4 seconds, depending on the configuration."
        },
        {
            name: "The Ford Mustang",
            about: "The Ford Mustang from the 1960s is one of the most iconic American cars in automotive history. ",
            image: mustang60,
            details: "1964–1966 (First Generation): The Mustang was first unveiled at the 1964 New York World's Fair. Its introduction sparked a new class of cars, the 'pony cars,' known for their compact size, sporty performance, and affordable price.",
            images: [mustang60, mustang60Side, mustang60Back],
            bar: mustang60Salon,
            sound: mustang60Sound,
            comfort: 'Engine Options: Initially, the Mustang came with a range of engine options, from a 170 cubic inch inline-six to a 271 horsepower 289 cubic inch V8. The V8 version was particularly popular for performance enthusiasts, and it quickly gained a reputation for speed and power.Cultural Impact: Throughout the 60s, the Mustang became synonymous with freedom, youth culture, and the American spirit. It appeared in movies, TV shows, and was embraced by car enthusiasts worldwide. Overall, the 1960s Mustangs played a huge role in shaping the future of American muscle cars and remain highly sought after by collectors today.'
        },
        {
            name: "Pagani Zonda R",
            about: "The Pagani Zonda R is an iconic hypercar designed purely for the racetrack, making it one of the most extreme and high-performance vehicles ever built by Pagani Automobili.",
            image: paganiZonda,
            details: "Engine: A naturally aspirated 6.0-liter V12 engine derived from Mercedes-Benz AMG, delivering 750 horsepower and 710 Nm of torque.Chassis: The Zonda R boasts a carbon-titanium monocoque chassis, ensuring exceptional rigidity while keeping the car lightweight.",
            images: [paganiZonda, paganiZondaSide, paganiZondaBack],
            bar: paganiZondaSalon,
            sound: paganiZondaSound,
            comfort: " Performance: 0-100 km/h (0-62 mph): ~2.7 seconds Top Speed: Over 350 km/h (217 mph)     Nurburgring Lap Time: 6:47 (making it one of the fastest cars to tackle the Green Hell at its time). Aerodynamics: Features an aggressive aero package, including a large rear wing, front splitters, and a rear diffuser for maximum downforce. Weight: Approximately 1,070 kg, offering an incredible power-to-weight ratio.Exclusivity: Only 15 units were produced, making it a highly sought-after collector’s car."
        },
    ];

    const car = cars.find((c) => c.name === name);

    if (!car) {
        return <p className="text-red-800 text-center py-8 text-lg">Car not found.</p>
    }

    return (
        <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
            <Header />
            <div className="container mx-auto px-4 py-8 pt-28">
                <h1 className="text-white text-3xl font-bold text-center mb-8">{car.name}</h1>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Swiper Slider */}
                    <div className="w-full lg:w-2/3">
                        <Swiper
                            pagination={pagination}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {car.images.map((im, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={im}
                                        alt={`Car Image ${index + 1}`}
                                        className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* Car Details */}
                    <div className="w-full lg:w-1/3 text-white">
                        <h2 className='text-4xl mb-2'>{car.name}</h2>
                        <p className="text-lg leading-relaxed">{car.details}</p>
                    </div>
                </div>
            </div>

            <div className="container bg-white dark:bg-gray-800 p-4 rounded shadow mx-auto">
                <h2 className="text-black dark:text-white font-semibold mb-2">The Sound of the engine.</h2>
                <audio controls src={car.sound} className="w-full"></audio>
            </div>


            <div className="container mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row items-center gap-8 justify-between">
                {/* Comfort Text */}
                <p className="text-white font-medium max-w-lg">
                    {car.comfort}
                </p>
                {/* Image */}
                <img
                    className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover"
                    src={car.bar}
                    alt={car.name}
                />
            </div>


        </div>
    );
}

export default CarDetails;
