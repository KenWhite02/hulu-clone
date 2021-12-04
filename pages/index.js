import Head from 'next/head';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import Footer from '../components/Footer';
import requests from '../utils/requests';

const Home = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="A Hulu Clone Created using Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Results results={results} />
      <Footer />
    </div>
  );
};

export default Home;

export async function getServerSideProps({ query }) {
  const genre = query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const { results } = await request.json();

  return {
    props: {
      results,
    },
  };
}
