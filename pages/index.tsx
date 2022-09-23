import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Header from '../src/Components/Header/Header'
import WaitPost from '../src/Components/PostSituation/WaitPost'

const Home: NextPage = () => {
  return (
    <Flex flexDirection={'column'}>
      <Header />
      <WaitPost />
    </Flex>
  )
}

export default Home
