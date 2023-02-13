import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UrlPage from "../../components/urlPages/UrlPages";

const GenrePage = ({searchResult, newGenre, newPage, newUrl}) => {
  const router = useRouter();
  const { url } = router.query;

  return (
    <>
      <UrlPage searchResult={searchResult} newGenre={newGenre} newPage={parseInt(newPage)} newUrl={newUrl}/>
    </>
  );
};

export default GenrePage;

export async function getServerSideProps({ params }) {
  const newGenre = params.url.split("-").slice(0,-2);
  const newPage= params.url.split("-").slice(-1)[0][4];
  const newUrl = params.url.split("-").slice(-2)[0];
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b1f37208505d197304b3983a228e9173&page=${newPage}&with_genres=${newUrl}`);
  const searchResult = await res.json();

  return {
    props: {
      searchResult,
      newUrl,
      newGenre,
      newPage,
    },
  };
}

