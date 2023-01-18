import { useRouter } from "next/router";
import Film from "../../components/film/Film";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const [searchResult, setSearchedResult] = useState([]);

  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.DB_KEY}&query=${url}`)
      .then((res) => res.json())
      .then((data) => setSearchedResult(data));
  }, [url]);
  console.log(searchResult);
  return (
    <div style={{ padding: "90px 30px 0 30px", display: "flex", flexWrap: "wrap", backgroundColor: "#616161" }}>
      {searchResult.results &&
        searchResult.results.map((searchedFilm) => {
          return (
            <div style={{ margin: "0 19px" }}>
              <Film title={searchedFilm.title} imdb={searchedFilm.vote_average.toFixed(2)} date={searchedFilm.release_date} src={searchedFilm.backdrop_path} />
            </div>
          );
        })}
    </div>
  );
};

export default Detail;
