
import styles from '../styles/_Slider.module.scss'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../components/Data'
import {AiFillEye, AiFillCaretRight} from 'react-icons/ai'
import { useEffect, useState } from 'react';

const Slider = () => {

  // const [add,setAdd] = useState(false);
  // const addClass = () => {
  //   setAdd(true);
  //   setTimeout(() => {
  //     setAdd(false)
  //   }, 2500);
  

  
    return ( 
        <div className={styles.slider}>

        <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      navigation
      // onSlideChange={() => addClass()}
    >
      {
        Data.map((dat) => {
          // `${styles.filmInfo} ${styles.slideLeft}`
          // className={add? `${styles.filmInfo} ${styles.slideLeft}` : styles.filmInfo}
          return (
        <SwiperSlide key={dat.id} style={{height:'450px'}} className={styles.slide}>
            <div className={styles.filmInfo}>
                <h1>{dat.title}</h1>
                <div className={styles.filmDetails}>
                  <span>{dat.years} Years</span>
                  <span style={{background:'#e50916',padding:'5px'}}>{dat.type}</span>
                  <span><AiFillEye /> {dat.views} Views</span>
                </div>
                <p>{dat.text}</p>
                <button><AiFillCaretRight/>PLAY NOW</button>
            </div>
            <div className={styles.images}>
                <img src={dat.src} alt="" className={styles.image}/>
                <div className={styles.opacity}>
            </div>
            </div>
        </SwiperSlide>
          )
        })
      }
    </Swiper>
    </div>
     );
}
 
export default Slider;