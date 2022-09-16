import React from 'react';

import Layout from '../components/layout/index';
import useWindowSize from '../hooks/useWindowSize';

function MessagesPage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      Messages
    </Layout>
  );
}

export default MessagesPage;
