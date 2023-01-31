import styles from "../../components/header/_Header.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch, BiLogIn } from "react-icons/bi";
import { FaUserAlt, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Link from "next/link";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchingData, setSearchingData] = useState([]);
  const [fullValue, setFullValue] = useState("");

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
    console.log(inputValue);
    setFullValue(inputValue);
    setSearchingData([]);
    if (inputValue.length > 2) {
      const searchingFilm = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.DB_KEY}&query=${inputValue}`)
          .then((res) => res.json())
          .then((datas) => setSearchingData(datas.results));
      };
      searchingFilm();
      console.log(searchingData);
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
            <button>
              Home <BsChevronDown />
            </button>
            <ul>
              <li>
                <Link href="/">Main Home</Link>
              </li>
              <li>
                <Link href="/">Movies Home</Link>
              </li>
              <li>
                <Link href="/">Tw Shows Home</Link>
              </li>
              <li>
                <Link href="/">Video Home</Link>
              </li>
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button>
              Movies <BsChevronDown />
            </button>
            <ul>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button>
              Tw Shows <BsChevronDown />
            </button>
            <ul>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <Link href="/">Movies List</Link>
                  </li>
                  <li>
                    <Link href="/">Load More</Link>
                  </li>
                  <li>
                    <Link href="/">Infinite Scroll</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button>
              Pages <BsChevronDown />
            </button>
            <ul>
              <li>
                <Link href="/">Blog</Link>
              </li>

              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
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
                      <div key={searchingDat.id} className={styles.searchingDat_item}>
                        <div className={styles.searchingDiv_background} style={{ backgroundImage: searchingDat.backdrop_path ? `url(https://image.tmdb.org/t/p/w500${searchingDat.backdrop_path}` : "url(../images/404erroricon.svg)" }}></div>
                        <span>{searchingDat.title}</span>
                      </div>
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
