import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { SITE_TITLE } from '../constants/head'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.white.light};
`

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE} | home</title>
      </Head>
      <Title>Hello World !</Title>
      <Button>Botão</Button>
      <Navbar />
    </>
  )
}

export default Home
