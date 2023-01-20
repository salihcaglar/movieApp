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

  // const searchFilm = () => {
  //   const data = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.DB_KEY}&query=${inputValue}`)
  //     .then((res) => res.json())
  //     .then((datas) => console.log(datas));
  // };

  const changeOpenSearch = () => {
    setOpenSearch(!openSearch);
    setOpenLogin(false);
    setInputValue("");
    if (!openSearch) {
      console.log("asd");
    }
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

  // function Input() {
  //   const ref = useRef(null);

  //   inputRef.current.focus();
  // }
  const inputRef = useRef(null);
  useEffect(() => {
    if (openSearch) {
      inputRef.current.focus();
    }
  }, [openSearch]);

  function handleKeyPress(event) {
    if (event.key === "Enter" && inputValue.length > 2) {
      Router.push("/searchresults/" + inputValue);
      setOpenSearch(false);
    }
  }

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
                <input ref={inputRef} placeholder="Search .." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} />
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
