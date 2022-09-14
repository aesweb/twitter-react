import React from 'react';

import Layout from '../components/layout';
import useWindowSize from '../hooks/useWindowSize';

function ProfilePage() {
  const size = useWindowSize();
  return (
    <Layout>
      {JSON.stringify(size)} <br />
      Profile
    </Layout>
  );
}

export default ProfilePage;
