import { useRouter } from "next/router";
import Film from "../../components/film/Film";
import React, { useEffect, useState } from "react";
import styles from "../../pages/searchresults/_Url.module.scss";

const Detail = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const router = useRouter();
  const { url } = router.query;

  const handleClick = (index) => {
    setSelectedComponent(index);
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.DB_KEY}&query=${url}&language=tr-TR`)
      .then((res) => res.json())
      .then((data) => setSearchResult(data));
  }, [url]);

  return (
    <>
      <div className={styles.searchContainer}>
        <h1>Arama Sonuçlarınız</h1>
        <div className={styles.searchResults}>
          {searchResult.results &&
            searchResult.results.map((searchedFilm, index) => {
              return (
                <div className={styles.searchResult} key={searchedFilm.id}>
                  <Film title={searchedFilm.title} imdb={searchedFilm.vote_average.toFixed(2)} date={searchedFilm.release_date} src={searchedFilm.backdrop_path} />
                  {searchedFilm.overview && (
                    <div className={styles.overview}>
                      {selectedComponent === index ? (
                        <div>
                          <p className={styles.overview_popen}>{searchedFilm.overview}</p>
                          <button onClick={() => handleClick(null)}>show less</button>
                        </div>
                      ) : (
                        <div>
                          <p className={styles.overview_p}>{searchedFilm.overview}</p>
                          <button onClick={() => handleClick(index)}>show more</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Detail;

// export const getServerSideProps = async () => {
//   const router = useRouter();
//   const { url } = router.query;
//   const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.DB_KEY}&query=${url}`);
//   const searchResult = await res.json();
//   return {
//     props: {
//       searchResult,
//     },
//   };
// };
