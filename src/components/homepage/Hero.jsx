// import React from 'react'
// import s1 from '../../../assets/corosolImg/s1.jpeg'
// import s2 from '../../../assets/corosolImg/s2.jpeg'
// import s3 from '../../../assets/corosolImg/s3.jpeg'
// import s4 from '../../../assets/corosolImg/s4.jpeg'
// import CircleCategory from './CircleCategory'



// const Hero = () => {
//   return (
//     <div>
//       <div className="carousel w-full h-[250px]  md:h-[600px] lg:h-[450px]">

//         <div id="slide1" className="carousel-item relative w-full snap-center shrink-0">
//           <img src={s1} className="w-full" />
//           <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
//             <a href="#slide4" className="btn btn-circle">❮</a>
//             <a href="#slide2" className="btn btn-circle">❯</a>
//           </div>
//         </div>

//         <div id="slide2" className="carousel-item relative w-full snap-center shrink-0">
//           <img src={s2} className="w-full" />
//           <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
//             <a href="#slide1" className="btn btn-circle">❮</a>
//             <a href="#slide3" className="btn btn-circle">❯</a>
//           </div>
//         </div>

//         <div id="slide3" className="carousel-item relative w-full snap-center shrink-0">
//           <img src={s3} className="w-full" />
//           <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
//             <a href="#slide2" className="btn btn-circle">❮</a>
//             <a href="#slide4" className="btn btn-circle">❯</a>
//           </div>
//         </div>

//         <div id="slide4" className="carousel-item relative w-full snap-center shrink-0">
//           <img src={s4} className="w-full" />
//           <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
//             <a href="#slide3" className="btn btn-circle">❮</a>
//             <a href="#slide1" className="btn btn-circle">❯</a>
//           </div>
//         </div>

//       </div>

//       <CircleCategory/>

//     </div>
//   )
// }

// export default Hero



import React, { useEffect, useState } from 'react';
import s2 from '../../../assets/corosolImg/7.webp';
import s3 from '../../../assets/corosolImg/6.webp';
import s1 from '../../../assets/corosolImg/5.webp';
import s4 from '../../../assets/corosolImg/4.webp';
import CircleCategory from './CircleCategory';
import WomenCategoryGrid from './WomenCategoryGrid';
import MenCategoryGrid from './MenCategoryGrid';
import WomenCollectionGrid from './WomenCollectionGrid';
import MenCollectionGrid from './MenCollectionGrid';

const slides = [s1, s2, s3, s4];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[450px] overflow-hidden">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-left-top transition-all duration-1000"
        />
      </div>

      <CircleCategory />
      <WomenCategoryGrid/>
      <MenCategoryGrid/>
      <WomenCollectionGrid/>
      <MenCollectionGrid/>
    </div>
  );
};

export default Hero;
