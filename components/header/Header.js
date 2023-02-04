import styles from "../../components/header/_Header.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch, BiLogIn } from "react-icons/bi";
import { FaUserAlt, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Link from "next/link";
import slug from "slug";

const Header = ({ genres, genreFilms }) => {
  // console.log(genres?.genres);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchingData, setSearchingData] = useState([]);

  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    if (genres?.genres?.length > 0) setGenresData(genres.genres);
  }, [genres]);

  const changeOpenSearch = () => {
    setOpenSearch(!openSearch);
    setOpenLogin(false);
    setInputValue("");
    setSearchingData([]);
  };
  const closeDropdowns = (e) => {
    setOpenLogin(false);
    setOpenSearch(false);
  };

  const changeOpenLogin = (e) => {
    setOpenLogin(!openLogin);
    setOpenSearch(false);
  };

  const [scrollPosition, setScrollPosition] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const inputRef = useRef(null);
  useEffect(() => {
    if (openSearch) {
      inputRef.current.focus();
    }
  }, [openSearch]);

  const handleKeyPress = (inputValue) => {
    setInputValue(inputValue);
    setSearchingData([]);
    const searchingFilm = () => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.DB_KEY}&query=${inputValue}&language=tr-TR`)
        .then((res) => res.json())
        .then((datas) => setSearchingData(datas.results));
    };
    if (inputValue.length > 2) {
      searchingFilm();
    }

    if (event.key === "Enter" && inputValue.length > 2) {
      Router.push("/searchresults/" + inputValue);
      setOpenSearch(false);
      setInputValue("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.header}
      style={{
        position: scrollPosition > 400 ? "fixed" : "absolute",
        backgroundColor: scrollPosition > 400 ? "rgb(34, 34, 34)" : "rgb(34, 34, 34, 0.4)",
      }}
    >
      <div className={styles.overlay} onClick={closeDropdowns} style={{ display: openSearch || openLogin ? "block" : "none" }}></div>
      <div className={styles.navbar}>
        <Link href="/">
          <div className={styles.logo}></div>
        </Link>
        <div className={styles.dropdowns} style={{ left: openLeftMenu ? "0" : "-300px" }}>
          <div className={styles.dropdown}>
            {/* <button>
              Türe Göre Arama <BsChevronDown />
            </button> */}
            {genresData?.length > 0 ? (
              <ul data-id="test">
                {genresData?.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.search_icon} style={{ position: "relative" }}>
            {openSearch ? <FaTimes onClick={changeOpenSearch} /> : <BiSearch onClick={changeOpenSearch} />}
            <div className={styles.search} style={{ display: openSearch ? "block" : "none" }}>
              <label>
                <input ref={inputRef} type="text" placeholder="Search .." onKeyUp={(e) => handleKeyPress(e.target.value)} />
                <button>
                  <Link
                    href={`/searchresults/${inputValue}`}
                    onClick={() => {
                      setOpenSearch(false);
                      setInputValue("");
                    }}
                  >
                    <BiSearch />
                  </Link>
                </button>
              </label>
              <div className={styles.searchingDiv}>
                {searchingData &&
                  searchingData.map((searchingDat) => {
                    return (
                      <Link onClick={() => setOpenSearch(false)} key={searchingDat.id} href={`/movie/${searchingDat.id}`} as={`/movie/${slug(searchingDat.title)}-${searchingDat.id}`}>
                        <div className={styles.searchingDat_item}>
                          <div className={styles.searchingDiv_background} style={{ backgroundImage: searchingDat.backdrop_path ? `url(https://image.tmdb.org/t/p/w500${searchingDat.backdrop_path}` : "url(../images/404erroricon.svg)" }}></div>
                          <span>{searchingDat.title}</span>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <button onClick={changeOpenLogin} className={styles.user_icon} style={{ position: "relative" }}>
            <FaUserAlt />
            <div className={styles.userMenu} style={{ display: openLogin ? "block" : "none" }}>
              <Link href="/login">
                <BiLogIn />
                Login
              </Link>
              <Link href="/register">
                <FaUserAlt />
                Register
              </Link>
            </div>
          </button>
          <Link href="/" className={styles.subscribe}>
            SUBSCRIBE
          </Link>
          <button className={styles.hamburger} onClick={() => setOpenLeftMenu(!openLeftMenu)}>
            <FiMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

// https://api.themoviedb.org/3/discover/movie?api_key=b1f37208505d197304b3983a228e9173&with_genres=28&language=en-US

// export async function getStaticPaths() {
//   const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.DB_KEY}&with_genres=${params.id}&language=tr-TR`);
//   const genres = await res.json();
//   const paths = genres.map((genre) => {
//     return { params: { id: `${genre.id}` } };
//   });
//   return {
//     paths,
//   };
// }

// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps() {
//   const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.DB_KEY}&language=tr-TR`);
//   const genreIds = await data.json();
//   return {
//     props: {
//       genreIds,
//     },
//   };
// }

// export const getServerSideProps = async () => {
//   const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.DB_KEY}&language=tr-TR`);
//   const turler = await response.json();

//   return {
//     props: {
//       turler,
//     },
//   };
// };
