import styles from '../styles/_Swiper.module.scss'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from './Data';
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default () => {
  return (
    <div className={styles.mySwipper}>
        <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
      slidesPerView={1}
      navigation
    >
      {
        Data.map((dat) => {
          return (
            <SwiperSlide key={dat.id}>
            <Image src={dat.src} fill alt={dat.title} className={styles.images}/>
            <div className={styles.opacity}></div>
            <div className={styles.filmDetails}>
              <div className={styles.videoPlay}>
                <AiOutlinePlayCircle className={styles.videoIcon}/>
                <h3>Watch Trailer</h3>
              </div>
              <h1 className={styles.title}>
                {dat.title}
              </h1>
              <div className={styles.filmInfo}>
                <ul>
                  <li className={styles.years}>
                    {dat.years} years
                  </li>
                  <li className={styles.type}>
                    {dat.type}
                  </li>
                  <li className={styles.view}>
                    <AiFillEye className={styles.eyeIcon}/>
                    {dat.views} Views
                  </li>
                </ul>
                <p className={styles.para}>
                  {dat.text} 
                </p>
              </div>
        </div>
      </SwiperSlide>
          )
        })
      }
    </Swiper>
    </div>
  );
};