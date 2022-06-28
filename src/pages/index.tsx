import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MetaTitle from '../components/MetaTitle';

import { HomeContainer } from '../styles/pages/home';

function Home(): JSX.Element {

  const route = useRouter();

  useEffect(() => { route.push('/dashboard'); }, []);

  return (
    <HomeContainer>
      <MetaTitle page="Home" />
      <h1>Loading</h1>
    </HomeContainer>
  );
}

export default Home;
