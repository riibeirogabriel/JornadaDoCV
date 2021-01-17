import React from 'react';

import Layout from '../../layout/Private';

import Profile from '../../components/Profile';
import BottomBar from '../../components/BottomBar';

const Home = () => (
  <Layout>
    <Profile />
    <BottomBar />
  </Layout>
);

export default Home;
