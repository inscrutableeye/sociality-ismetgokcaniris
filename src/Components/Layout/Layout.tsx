import { Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout: React.FC = ({ children }: any) => {
  return (
    <Flex flexDirection={'row'}>
      <Navbar />
      <main>{children}</main>
    </Flex>
  )
}
export default Layout
