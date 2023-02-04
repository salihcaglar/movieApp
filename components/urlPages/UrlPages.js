import { useRouter } from "next/router";
import Film from "../../components/film/Film";
import React, { useEffect, useState } from "react";
import styles from "./_UrlPages.module.scss";

const UrlPage = ({ searchResult }) => {
  return (
    <>
      <div className={styles.searchContainer}>
        <h1>Arama Sonuçlarınız</h1>
        <div className={styles.searchResults}>
          {searchResult.results &&
            searchResult.results.map((searchedFilm, index) => {
              return (
                <div className={styles.searchResult} key={searchedFilm.id}>
                  <Film title={searchedFilm.title} imdb={searchedFilm.vote_average.toFixed(2)} date={searchedFilm.release_date} src={searchedFilm.backdrop_path} id={searchedFilm.id} />
                  {searchedFilm.overview && (
                    <div className={styles.overview}>
                      {/* {selectedComponent === index ? (
                        <div>
                          <p className={styles.overview_popen}>{searchedFilm.overview}</p>
                          <button onClick={() => handleClick(null)}>show less</button>
                        </div>
                      ) : (
                        <div>
                          <p className={styles.overview_p}>{searchedFilm.overview}</p>
                          <button onClick={() => handleClick(index)}>show more</button>
                        </div>
                      )} */}
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

export default UrlPage;
