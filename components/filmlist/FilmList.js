import React from "react";
import Film from "../film/Film";
import styles from "../filmlist/_FilmList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

const FilmList = ({ data, filmData }) => {

  const [width, setWidth] = useState();
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  console.log(width);
  
  return (
    <div className={styles.filmList}>
      <div className={styles.header}>
        <h2>{data} Videos</h2>
        <button>More Videos</button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        slidesPerView={width<920?'2':'4'}
        navigation
      >

        {filmData.results.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className={styles.movieSlide}>
              <Film
                title={movie.title}
                imdb={movie.vote_average.toFixed(2)}
                date={movie.release_date}
                src={movie.backdrop_path}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FilmList;
