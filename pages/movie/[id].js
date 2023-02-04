import React from "react";
import { useRouter } from "next/router";
import styles from "../movie/_Movie.module.css";
import Image from "next/image";
import slug from "slug";
import Popup from "reactjs-popup";
import { FaTimes } from "react-icons/fa";

export default function MovieDetail({ filmInfo }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{filmInfo.title}</h2>
        {filmInfo.genres &&
          filmInfo.genres.map((genre) => {
            return <span key={genre.id}>{genre.name}</span>;
          })}
      </div>
      <div className={styles.content}>
        <Popup trigger={<Image style={{ cursor: "zoom-in" }} src={`https://image.tmdb.org/t/p/original${filmInfo.poster_path}` || `https://image.tmdb.org/t/p/original${filmInfo.backdrop_path}`} width={300} height={300} alt={filmInfo.title || filmInfo.name} />} modal>
          {(close) => (
            <div style={{ width: "70vw", height: "90vh" }}>
              <Image src={`https://image.tmdb.org/t/p/original${filmInfo.poster_path}` || `https://image.tmdb.org/t/p/original${filmInfo.backdrop_path}`} fill alt={filmInfo.title || filmInfo.name} className={styles.poster} />
              <button onClick={close} style={{ position: "absolute", right: "0", top: "0", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", outline: "none", cursor: "pointer" }}>
                <FaTimes />
              </button>
            </div>
          )}
        </Popup>

        <div className={styles.content_details}>
          {filmInfo.popularity && <span>Popülerlik: {filmInfo.popularity}</span>}
          {filmInfo.release_date && <span>Filmin Çıkış Tarihi: {filmInfo.release_date}</span>}
          {filmInfo.runtime && <span>Film Süresi: {filmInfo.runtime} dakika</span>}
          {filmInfo.overview && <span>Açıklama: {filmInfo.overview}</span>}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const newid = params.id.split("-").slice(-1)[0];
  const res = await fetch(`https://api.themoviedb.org/3/movie/${newid}?api_key=${process.env.DB_KEY}&language=tr-TR`);
  const filmInfo = await res.json();

  return {
    props: {
      filmInfo,
    },
  };
}

// export const getServerSideProps = async (id) => {
//   const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.DB_KEY}`);
//   const filmInfo = await res.json();
//   return {
//     props: {
//       filmInfo,
//     },
//   };
// };

// gelecek id'lerin belli olduğu durumlarda önceden sayfayı hazırlamak için kullanılacak kodlar

// export async function getStaticPaths() {
//   const data = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.DB_KEY}&language=en-US`)
//   const filmInfos = await data.json()
//   return {
//     paths: filmInfos.map(filmInfo => {
//       return { params: {id:filmInfo.id}}
//     }),
//     fallback:false
//   }
// }

// export async function getStaticProps({params}) {
//   const data = await fetch ('https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US')
//   const filmInfo = await data.json()
//   return {
//     props: {
//       params
//     }
//   }
// }
