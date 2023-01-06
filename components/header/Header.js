import styles from "../../components/header/_Header.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch, BiLogIn } from "react-icons/bi";
import { FaUserAlt, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const changeOpenSearch = () => {
    setOpenSearch(!openSearch);
    setOpenLogin(false);
  };

  const changeOpenLogin = () => {
    setOpenLogin(!openLogin);
    setOpenSearch(false);
  };

  const [scrollPosition, setScrollPosition] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
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
      <div className={styles.navbar}>
        <div className={styles.logo}></div>
        <div className={styles.dropdowns}>
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
          <Link href="/" className={styles.search_icon} style={{ position: "relative" }}>
            {openSearch ? <FaTimes onClick={changeOpenSearch} /> : <BiSearch onClick={changeOpenSearch} />}
            {/* <BiSearch onClick={() => setOpenSearch(!openSearch)}/> */}
            <div className={styles.search} style={{ display: openSearch ? "block" : "none" }}>
              <label>
                <input placeholder="Search .." />
                <button>
                  <BiSearch />
                </button>
              </label>
            </div>
          </Link>
          <button onClick={changeOpenLogin} className={styles.user_icon} style={{ position: "relative" }}>
            <FaUserAlt />
            <div className={styles.userMenu} style={{ display: openLogin ? "block" : "none" }}>
              <Link href="/">
                <BiLogIn />
                Login
              </Link>
              <Link href="/">
                <FaUserAlt />
                Register
              </Link>
            </div>
          </button>
          <Link href="/" className={styles.subscribe}>
            SUBSCRIBE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
