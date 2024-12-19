import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-between h-screen relative bg-white"
      style={{
        backgroundImage: "url('/governorhouse.jpeg')",
        backgroundSize: 'cover', // Ensures the image covers the section
        backgroundPosition: 'center', // Centers the background image
      }}
    >
      {/* Background Overlay with Opacity */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      {/* Left Side - Text Content */}
      <div className="flex flex-col justify-center max-w-7xl p-16 ml-20 mt-32 z-10">
        <h1 className="text-5xl font-extrabold text-[rgb(15,79,131)] mb-2">Governor Sindh</h1>
        <h2 className="text-4xl text-[rgb(15,79,131)] mb-4">Kamran Khan Tessori</h2>
        <h3 className="text-5xl font-extrabold text-[rgb(59,176,231)] mb-6">
          Certified Cloud <br />Applied Generative AI<br />Engineer (GenEng)
        </h3>
        <p className="text-xl font-extrabold text-[rgb(15,79,131)] mb-4">
          Earn up to <span className="font-bold text-[rgb(15,79,131)] mb-4">$5,000 / month</span>
        </p>
        <p className="text-2xl font-extrabold text-[rgb(15,79,131)] mb-8">
          Now admissions are open in <br />Hyderabad
        </p>
        <div className="flex items-center space-x-12">
          <button className="bg-[rgb(15,79,131)] text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-600 transition">
            APPLY NOW
          </button>
          <p className="text-lg text-[rgb(15,79,131)] font-semibold">
            <span className="ml-6 font-extrabold text-3xl">562,143</span> <br />Accepted Applications
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative w-full md:w-1/2 h-full mt-40 md:mt-30">
        <Image
          src="/governor.png" // Replace with the correct image path
          alt="Governor Image"
          layout="intrinsic" // Use intrinsic to maintain aspect ratio without cutting off
          width={500}  // Adjust width based on your requirements
          height={700} // Adjust height based on your requirements
          className="absolute top-0 right-0 w-full h-full object-contain" // Ensures image is contained without cutting off
        />
      </div>
    </section>
  );
};

export default HeroSection;