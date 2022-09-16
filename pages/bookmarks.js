import React from 'react';

import Layout from '../components/layout/index';
import useWindowSize from '../hooks/useWindowSize';

function BookmarksPage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      Bookmarks
    </Layout>
  );
}

export default BookmarksPage;
