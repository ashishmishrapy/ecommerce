import React from 'react';
import s1 from '../../../assets/productList/s1.jpg';
import s2 from '../../../assets/productList/s2.jpg';
import s3 from '../../../assets/productList/s3.jpg';
import s4 from '../../../assets/productList/s4.jpg';
import s5 from '../../../assets/productList/s5.jpg';
import s6 from '../../../assets/productList/s6.jpg';
import s7 from '../../../assets/productList/s7.jpg';
import s8 from '../../../assets/productList/s8.jpg';

const categories = [
  { name: 'Men Formal', image: s1 },
  { name: 'Women Ethinic', image: s2 },
  { name: 'Women Heels', image: s3 },
  { name: 'Men Casuals', image: s4 },
  { name: 'Women Sandals', image: s5 },
  { name: 'Men Sandals', image: s6 },
  { name: 'Men Boots', image: s7 },
  { name: 'Women Boots', image: s8 },
];

function CircleCategory() {
  return (
    <div className="w-full px-4 py-4">
      <div
        className="
          flex 
          flex-nowrap 
          md:flex-wrap 
          lg:grid lg:grid-cols-8 
          gap-8 
          overflow-x-auto 
          md:overflow-x-hidden 
          md:pl-10

        "
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-25"
          >
            <div className="md:w-30 md:h-30 rounded-full bg-gray-100 overflow-hidden cursor-pointer shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-2 text-sm text-center text-black">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircleCategory;
