import React from 'react';
import menMain from '../../../assets/men/main.jpg';
import loafers from '../../../assets/men/loafers.jpg';
import sneakers from '../../../assets/men/sneakers.jpg';
import sandals from '../../../assets/men/sandals.jpg';
import bags from '../../../assets/men/formals.jpg'; 

const sideImages = [
  { src: loafers, label: 'LOAFERS' },
  { src: sneakers, label: 'SNEAKERS' },
  { src: sandals, label: 'SANDALS' },
  { src: bags, label: 'BAGS' },
];

const ImageCard = ({ src, label }) => (
  <div className="flex flex-col items-center w-full cursor-pointer">
    <div className="w-full cursor-pointer aspect-square overflow-hidden rounded shadow-md">
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>
    <p className="mt-2 text-sm font-medium text-black text-center">{label}</p>
  </div>
);

function MenCategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-6xl mx-auto cursor-pointer">
      {/* Left Main Image Block */}
      <div className="relative w-full aspect-[3/4] md:aspect-auto">
        <img
          src={menMain}
          alt="Men"
          className="w-full h-full object-cover rounded shadow-lg"
        />
        <div className="absolute bottom-1 md:bottom-2 left-3 text-white text-2xl md:text-4xl font-semibold  bg-opacity-40 px-4 py-2 rounded">
          MEN
        </div>
      </div>

      {/* Right Side Grid */}
      <div className="grid grid-cols-2 gap-4">
        {sideImages.map((item, index) => (
          <ImageCard key={index} src={item.src} label={item.label} />
        ))}
      </div>
    </div>
  );
}

export default MenCategoryGrid;
