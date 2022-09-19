import React from 'react'
import { Flex, Image, Box } from '@chakra-ui/react'
import NavbarMenu from './NavbarMenu'

interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Notification', icon: 'Icon1.png' },
  { name: 'Publish', icon: 'Icon2.png' },
  { name: 'Engage', icon: 'Icon4.png' },
  { name: 'Listen', icon: 'Icon5.png' },
  { name: 'Report', icon: 'Icon6.png' }
]

const Navbar: React.FC = () => {
  return (
    <Flex flexDirection={'column'} alignItems='start'>
      <Flex bg={'#31363B'} alignItems='center' justifyContent={'space-around'}>
        <Image src='Sociality-logo (2).png' paddingY={'22px'} paddingX='66px' />
      </Flex>
      <Flex flexDirection={'row'}>
        <Box w={'66px'} h='90vh' bg={'#2A2F33'} />
        <NavbarMenu />
      </Flex>
    </Flex>
  )
}
export default Navbar
