
import React from 'react'
import Film from './Film'
import styles from '../styles/_FilmList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const FilmList = ( {data} ) => {
    const [movieData, setMovieData] = useState([]);
    const getMovieList = () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.DB_KEY}`)
    .then(response => response.json())
    .then(movies => setMovieData(movies.results))
    useEffect (()=> {
     getMovieList();
    }, []);
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
      slidesPerView={4}
      navigation
      >
        {
            movieData.map((movie) => {
                return (
                    <SwiperSlide key={movie.id} className={styles.movieSlide}>
                      <Film title={movie.title} imdb={movie.vote_average.toFixed(2)} date={movie.release_date} src={movie.backdrop_path} />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </div>
  )
}

export default FilmList

