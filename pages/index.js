import { useEffect, useState } from 'react';
// import styles from '../styles/Home.module.css';
import Articolo from '../components/Articolo';

export default function Home() {
  const [articoliLista, setArticoliLista] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://notizen-e76c1-default-rtdb.firebaseio.com/articoli.json`
      );
      const body = await result.json();
      setArticoliLista(body);
      console.log('//');
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(...Object.entries(articoliLista));
  }, [articoliLista]);

  return (
    <>
      <h1>Homepage</h1>
    </>
  );
}
