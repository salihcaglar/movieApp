import styles from "../../components/swiper/_Swiper.module.scss";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default ({ filmData, play }) => {
  return (
    <div className={styles.mySwipper}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        navigation
      >
        {filmData.results.map((film) => {
          return (
            <SwiperSlide key={film.id}>
              <Image src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} fill alt={film.title || film.name} className={styles.images} />
              <div className={styles.opacity}></div>
              <div className={styles.filmDetails}>
                {play && (
                  <div className={styles.videoPlay}>
                    <AiOutlinePlayCircle className={styles.videoIcon} />
                    <h3>Watch Trailer</h3>
                  </div>
                )}
                <h2 className={styles.title}>{film.title || film.name}</h2>
                <div className={styles.filmInfo}>
                  <ul>
                    <li className={styles.years}>{film.release_date || "25.10.2022"}</li>
                    <li className={styles.type}>{film.media_type}</li>
                    <li className={styles.view}>
                      <AiFillEye className={styles.eyeIcon} />
                      {film.vote_average} Views
                    </li>
                  </ul>
                  <p className={styles.para}>{film.overview}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
