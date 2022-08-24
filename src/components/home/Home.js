import React from 'react';
import { useAuth, useUser } from '../../contexts/Contexts';

const Home = () => {
  const { auth } = useAuth();
  const { user } = useUser();

  console.log('auth', auth);
  console.log('user', user);

  return <div>Home</div>;
};

export default Home;
