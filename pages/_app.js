import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
