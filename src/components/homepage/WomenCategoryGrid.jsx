import React from 'react';
import womenMain from '../../../assets/women/main.jpg';
import flats from '../../../assets/women/flat.jpg';
import heels from '../../../assets/women/heels.jpg';
import ethnic from '../../../assets/women/ethnic.jpg';
import bags from '../../../assets/women/bags.jpeg';

const sideImages = [
  { src: flats, label: 'FLATS' },
  { src: heels, label: 'HEELS' },
  { src: ethnic, label: 'ETHNIC' },
  { src: bags, label: 'BAGS' },
];

const ImageCard = ({ src, label }) => (
  <div className="flex flex-col items-center w-full">
    <div className="w-full aspect-square overflow-hidden rounded shadow-md">
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>
    <p className="mt-2 text-sm font-medium text-black  text-center">{label}</p>
  </div>
);

function WomenCategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-6xl mx-auto cursor-pointer">
      {/* Left Main Image Block */}
      <div className="relative w-full aspect-[3/4] md:aspect-auto">
        <img
          src={womenMain}
          alt="Women"
          className="w-full h-full object-cover rounded shadow-lg"
        />
        <div className="absolute bottom-1 md:bottom-2 left-3 text-white text-2xl md:text-4xl font-semibold  bg-opacity-40 px-4 py-2 rounded">
          WOMEN
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

export default WomenCategoryGrid;
