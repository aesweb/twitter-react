import React from 'react';

import Layout from '../components/layout/index';
import useWindowSize from '../hooks/useWindowSize';

function HomePage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      Homepage
    </Layout>
  );
}

export default HomePage;
