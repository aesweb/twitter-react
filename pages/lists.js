import React from 'react';

import Layout from '../components/layout/index';
import useWindowSize from '../hooks/useWindowSize';

function ListsPage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      Lists
    </Layout>
  );
}

export default ListsPage;
