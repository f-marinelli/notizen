import { useEffect, useState } from 'react';
// import styles from '../styles/Home.module.css';
import Articolo from '../components/Articolo';

export default function Home({ articoli }) {
  const [articoliLista, setArticoliLista] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `https://notizen-e76c1-default-rtdb.firebaseio.com/articoli.json`
  //     );
  //     const body = await result.json();
  //     setArticoliLista(Object.values(body));
  //     console.log('//');
  //   };
  //   fetchData();
  // }, []);

  // const articoli =
  //   articoliLista.length > 1
  //     ? articoliLista.map((art, i) => (
  //         <Articolo key={i} testo={art.testo} titolo={art.titolo} />
  //       ))
  //     : [];

  const listaArticoli = articoli.map((art, i) => (
    <Articolo key={i} testo={art.testo} titolo={art.titolo} />
  ));

  return (
    <>
      <h1>Homepage</h1>
      {listaArticoli}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://notizen-e76c1-default-rtdb.firebaseio.com/articoli.json'
  );
  const body = await res.json();
  const articoli = Object.values(body);

  return {
    props: {
      articoli,
    },
  };
}
