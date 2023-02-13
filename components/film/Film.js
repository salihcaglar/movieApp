import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../film/_Film.module.scss";
import { AiFillPlayCircle, AiOutlineShareAlt, AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import slug from "slug";

const Film = ({ title = "Film Adı Gelmedi", imdb = "5.0", date = "25.10.2022", src, id }) => {
  const [clicked, setClicked] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const handleClick = () => {
    setClicked(!clicked);
  };


useEffect(() => {
  localStorage.setItem('items', JSON.stringify(favourites));
}, [favourites]);

  return (
    
      <div className={styles.film}>
        <div
          className={styles.image}
          style={{
            backgroundImage: src ? `url(https://image.tmdb.org/t/p/w500${src})` : "url(../images/biletinial.png)",
          }}
        >
          <div className={styles.playBtn}>
            <AiFillPlayCircle />
          </div>
          <div className={styles.icons}>
            <div>
              <AiOutlinePlus />
              <div>+ Sign in to add this video to a playlist</div>
            </div>
            <div>
              <AiFillHeart onClick={handleClick} style={{ color: clicked ? "red" : "white" }} />
            </div>
            <div>
              <AiOutlineShareAlt />
              <div>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
        <Link href={`/movie/${id}`} as={`/movie/${slug(title)}-${id}`}>
        <div className={styles.details}>
          <h4>{title}</h4>
          <span>{date}</span>
          <span>IMDB: {imdb}</span>
        </div>
        </Link>
      </div>
   
  );
};

export default Film;
