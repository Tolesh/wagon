import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import UsersCard from '../components/UsersCard';

const Home = () => {
  return (
    <>
    <Header />
    <GetStarted />
    <GetInTouch />
    <UsersCard />
    </>

  )
}

export default Home