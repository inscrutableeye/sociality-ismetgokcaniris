import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Header from '../src/Components/Header/Header'

const Home: NextPage = () => {
  return (
    <Flex>
      <Header />
    </Flex>
  )
}

export default Home
