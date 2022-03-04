import React from 'react'
import Header from '../Header/Header'
import MainContentComponent from '../MainContent/MainContentComponent'
import Wrapper from './Home.styles'

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <MainContentComponent />
    </Wrapper>
  )
}

export default Home