import { useRouter } from "next/router";
import Film from "../../components/film/Film";
import React, { useEffect, useState } from "react";
import styles from "../../pages/genre/_Genre.module.scss";
import UrlPage from "../../components/urlPages/UrlPages";

const GenrePage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const router = useRouter();
  const { url } = router.query;

  const handleClick = (index) => {
    setSelectedComponent(index);
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b1f37208505d197304b3983a228e9173&with_genres=36`)
      .then((res) => res.json())
      .then((data) => setSearchResult(data));
  }, [url]);

  return (
    <>
      <UrlPage searchResult={searchResult} />
    </>
  );
};

export default GenrePage;
