import Articolo from '../components/Articolo';
import Link from 'next/link';

export default function Home({ articoli }) {
  const listaArticoli = articoli.map((art, i) => (
    <Articolo key={i} id={i} testo={art.testo} titolo={art.titolo} />
  ));

  return (
    <>
      <h1>Homepage</h1>
      {listaArticoli}
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const response = await fetch(
    'https://notizen-e76c1-default-rtdb.firebaseio.com/articoli.json'
  );
  const body = await response.json();
  const articoli = Object.values(body);

  res.setHeader('Cache-Control', 'public, s-maxage=120');

  return {
    props: {
      articoli,
    },
  };
}
