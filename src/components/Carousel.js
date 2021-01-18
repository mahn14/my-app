// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Import Images
import img_portrait from '../images/portrait.png'
import img_kpmg from '../images/kpmg.png'
import img_natgeo from '../images/natgeo.png'

// CSS
import '../css/Carousel.css'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="emptyNavbar"></div>

      <Swiper className="Swiper"
        spaceBetween={200}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={img_portrait} />
          <div className="swiper-text">
          <h1>Michael Ahn</h1>
            <p>
              <b>Analytic, Inquisitive, Passionate</b><br></br>
              I spend my free time progress towards my powerlifting goals 
              and working on personal ML / software engineering projects. 
            </p>
          </div>
        </SwiperSlide>
    
        <SwiperSlide>
          <img src={img_kpmg} />
          <div className="swiper-text">
            <h1>Data & Analytics Modeler</h1>
            <p>
              <b>(Jan 2020 - Present)</b><br></br>
              I have worked on Service Now (ITSM, HR) implementations, 
              predictive modeling, 
              and operations research engagements.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img_natgeo} />
          <div className="swiper-text">
          <h1>Research Analyst</h1>
            <p>
              <b>(Aug 2018 - Dec 2019)</b><br></br>
              I pulled viewing data for key performance indexes,
              automated ETL process for reporting templates,
              and forecasted nonlinear (streaming) viewership.
              
            </p>
          </div>        
        </SwiperSlide>
          
        
      </Swiper>
    </div>
  );
};

export default Carousel;