import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

import summer from '../../../assets/men/summer.jpg';
import loafer from '../../../assets/men/loafer.jpg';
import festive from '../../../assets/men/festive.jpg';
import workwear from '../../../assets/men/office.jpg';

const collectionItems = [
  { src: loafer, label: 'LOAFER' },
  { src: workwear, label: 'WORKWEAR' },
  { src: summer, label: 'SUMMER' },
  { src: festive, label: 'FESTIVE EDIT' },
];

const CollectionCard = ({ src, label }) => (
  <div className="flex flex-col items-center w-full max-w-xs mx-auto">
    <div className="w-full aspect-square overflow-hidden rounded shadow-md">
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
      />
    </div>
    <p className="mt-2 text-base font-semibold text-center">{label}</p>
  </div>
);

function MenCollectionGrid() {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl text-black md:text-3xl mb-6">
        Shop By Collection Men
      </h2>

      {/* Mobile View - Swiper */}
      <div className="block md:hidden text-black">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          freeMode={true}
        >
          {collectionItems.map((item, index) => (
            <SwiperSlide key={index}>
              <CollectionCard src={item.src} label={item.label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden md:grid grid-cols-4 gap-6 text-black cursor-pointer">
        {collectionItems.map((item, index) => (
          <CollectionCard key={index} src={item.src} label={item.label} />
        ))}
      </div>
    </div>
  );
}

export default MenCollectionGrid;
