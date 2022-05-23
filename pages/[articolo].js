import { useRouter } from 'next/router';

const ArticoloEx = () => {
  const router = useRouter();
  // window && window.location

  return (
    <>
      <h1>Articolo {+router.query.id + 1}</h1>
      <h2>Titolo: {router.query.titolo}</h2>
      <h3>Testo: {router.query.testo}</h3>
    </>
  );
};

export default ArticoloEx;
