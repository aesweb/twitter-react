import React from 'react';

import Layout from '../components/layout';
import useWindowSize from '../hooks/useWindowSize';

function MorePage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      More
    </Layout>
  );
}

export default MorePage;
