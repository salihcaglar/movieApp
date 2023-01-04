import styles from "../styles/_Header.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useState,useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className={styles.header} style={{position:scrollPosition>400?'fixed' : 'absolute', backgroundColor:scrollPosition>400 ? 'rgb(34, 34, 34)' : 'rgb(34, 34, 34, 0.4)'}}>
      <div className={styles.navbar}>
        <div className={styles.logo}></div>
        <div className={styles.dropdowns}>
          <div className={styles.dropdown}>
            <button>Home <BsChevronDown /></button>
            <ul>
              <li><a href="#">Main Home</a></li>
              <li><a href="#">Movies Home</a></li>
              <li><a href="#">Tw Shows Home</a></li>
              <li><a href="#">Video Home</a></li>
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button>Movies <BsChevronDown /></button>
            <ul>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button>Tw Shows <BsChevronDown /></button>
            <ul>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><a href="">Movies List</a></li>
                  <li><a href="">Load More</a></li>
                  <li><a href="">Infinite Scroll</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button>Pages <BsChevronDown /></button>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.user}>
          <a href="" className={styles.search_icon}>
            <BiSearch />
          </a>
          <a href="" className={styles.user_icon}>
            <FaUserAlt />
          </a>
          <a href="" className={styles.subscribe}>
            SUBSCRIBE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
