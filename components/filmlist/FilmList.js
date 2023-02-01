import React from "react";
import Film from "../film/Film";
import styles from "../filmlist/_FilmList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

const FilmList = ({ data, filmData, width }) => {
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
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={width < 600 ? "1" : width < 920 ? "2" : "4"}
        navigation
      >
        {filmData.results.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className={styles.movieSlide}>
              <Film title={movie.title} imdb={movie.vote_average.toFixed(2)} date={movie.release_date} src={movie.backdrop_path} id={movie.id}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FilmList;
