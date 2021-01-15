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
    <Swiper
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
      </SwiperSlide>
      
      <SwiperSlide>
        <img src={img_kpmg} />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img_natgeo} />
        
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Carousel;