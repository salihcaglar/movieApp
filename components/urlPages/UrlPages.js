import Film from "../../components/film/Film";
import React, { useState } from "react";
import styles from "./_UrlPages.module.scss";
import Link from "next/link";
import {AiOutlineCaretRight,AiOutlineCaretLeft} from 'react-icons/ai'


const UrlPage = ({ searchResult,newGenre,newPage,newUrl }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [currentPage, setCurrentPage] = useState(newPage)
  
  const handleClick = (index) => {
    setSelectedComponent(index);
  };

  const pageNumbers =[1,2,3,4,5,6,7,8,9]
 
  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.title}>
          <h1>{newGenre} Türündeki Filmler</h1>
          <div>
            <div className={styles.pagination}>
              <Link onClick={()=> setCurrentPage(currentPage-1)} style={{pointerEvents:currentPage==1&&"none"}} href={`/genre/${newUrl}`} as={`/genre/${(newGenre)}-${newUrl}-page${currentPage-1}`}><AiOutlineCaretLeft/>Önceki sayfa</Link>
              <button>{currentPage}.sayfa </button>
              <Link onClick={()=> setCurrentPage(currentPage+1)} style={{pointerEvents:currentPage==9&&"none"}} href={`/genre/${newUrl}`} as={`/genre/${(newGenre)}-${newUrl}-page${currentPage+1}`}>Sonraki sayfa <AiOutlineCaretRight/></Link>
            </div>
            <div className={styles.linkGroup}>
              {
                pageNumbers.map((pageNumber)=> {
                return (
                <Link style={{backgroundColor:currentPage==pageNumber&&"gray", pointerEvents:currentPage==pageNumber&&"none"}} href={`/genre/${newUrl}`} as={`/genre/${(newGenre)}-${newUrl}-page${pageNumber}`} key={pageNumber} value={pageNumber}>{pageNumber}</Link>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className={styles.searchResults}>
          {searchResult.results &&
            searchResult.results.map((searchedFilm, index) => {
              return (
                <div className={styles.searchResult} key={searchedFilm.id}>
                  <Film title={searchedFilm.title} imdb={searchedFilm.vote_average.toFixed(2)} date={searchedFilm.release_date} src={searchedFilm.backdrop_path} id={searchedFilm.id} />
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

export default UrlPage;
