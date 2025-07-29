import React from 'react'
import corosol1 from '../../../assets/corosolImg/corosol-1.jpg'
import corosol2 from '../../../assets/corosolImg/corosol-2.jpg'
import corosol3 from '../../../assets/corosolImg/corosol-3.jpg'
import corosol4 from '../../../assets/corosolImg/corosol-4.jpg'
import corosol5 from '../../../assets/corosolImg/corosol-5.jpg'

import s1 from '../../../assets/corosolImg/s1.jpeg'
import s2 from '../../../assets/corosolImg/s2.jpeg'
import s3 from '../../../assets/corosolImg/s3.jpeg'
import s4 from '../../../assets/corosolImg/s4.jpeg'



const Hero = () => {
  return (
    <div>
      <div className="carousel w-full h-[250px]  md:h-[600px] lg:h-[450px]">

        <div id="slide1" className="carousel-item relative w-full snap-center shrink-0">
          <img src={s1} className="w-full" />
          <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full snap-center shrink-0">
          <img src={s2} className="w-full" />
          <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full snap-center shrink-0">
          <img src={s3} className="w-full" />
          <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full snap-center shrink-0">
          <img src={s4} className="w-full" />
          <div className="hidden md:flex absolute left-5 right-5 top-1/2 -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero