import { useRouter } from "next/router";
import Film from "../../components/film/Film";
import React, { useEffect, useState } from "react";
import styles from "../../pages/searchresults/_Url.module.scss";

const Detail = () => {
  const [searchResult, setSearchedResult] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.DB_KEY}&query=${url}`)
      .then((res) => res.json())
      .then((data) => setSearchedResult(data));
  }, [url]);

  console.log(searchResult);
  return (
    <>
      <div className={styles.searchContainer}>
        <h1>Arama Sonuçlarınız</h1>
        <div className={styles.searchResults}>
          {searchResult.results &&
            searchResult.results.map((searchedFilm) => {
              return (
                <div className={styles.searchResult} key={searchedFilm.id}>
                  <Film title={searchedFilm.title} imdb={searchedFilm.vote_average.toFixed(2)} date={searchedFilm.release_date} src={searchedFilm.backdrop_path} />
                  <div className={styles.overview}>
                    {showMore ? <p>{searchedFilm.overview}</p> : <p>{searchedFilm.overview.substring(0, 100)}</p>}

                    {showMore ? <button onClick={() => setShowMore(!showMore)}>show less</button> : <button onClick={() => setShowMore(!showMore)}>show more</button>}
                  </div>
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
