import React from 'react';

import Layout from '../components/layout';
import useWindowSize from '../hooks/useWindowSize';

function NotificationsPage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      Notifications
    </Layout>
  );
}

export default NotificationsPage;
