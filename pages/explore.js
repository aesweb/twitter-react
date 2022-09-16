import React from 'react';

import Layout from '../components/layout/index';
import useWindowSize from '../hooks/useWindowSize';

function ExplorePage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      Explore
    </Layout>
  );
}

export default ExplorePage;
