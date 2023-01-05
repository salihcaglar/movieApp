import Head from "next/head";
import Swiper from "../components/swiper/Swiper";
import FilmList from "../components/filmlist/FilmList";
import Slider from "../components/slider/Slider";

export default function Home({ filmData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swiper filmData={filmData} play={true} />
      <FilmList data={"Trend"} filmData={filmData} />
      <FilmList data={"Popular"} filmData={filmData} />
      <Slider play={false} />
      <FilmList data={"Most Liked"} filmData={filmData} />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.DB_KEY}`);
  const filmData = await res.json();
  return {
    props: {
      filmData,
    },
  };
};
