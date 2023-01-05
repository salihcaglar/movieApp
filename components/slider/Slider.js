import styles from "../../components/slider/_Slider.module.scss";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillEye, AiFillCaretRight } from "react-icons/ai";

const Slider = ( {filmData} ) => {
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
      >
        {filmData.results.map((film) => {
          return (
            <SwiperSlide key={film.id} style={{ height: "450px" }} className={styles.slide}>
              <div className={styles.filmInfo}>
                <h1>{film.title || film.name}</h1>
                <div className={styles.filmDetails}>
                  <span>{film.release_date || "25.10.2022"}</span>
                  <span style={{ background: "#e50916", padding: "5px" }}>{film.media_type}</span>
                  <span>
                    <AiFillEye /> {film.vote_average} Views
                  </span>
                </div>
                <p>{film.overview}</p>
                <button>
                  <AiFillCaretRight />
                  PLAY NOW
                </button>
              </div>
              <div className={styles.images}>
                <img src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} alt="" className={styles.image} />
                <div className={styles.opacity}></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
