import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text
} from '@chakra-ui/react'
import React from 'react'

interface LinkItemProps {
  name: string
  icon: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Notification', icon: 'Icon1.png' },
  { name: 'Publish', icon: 'Icon2.png' },
  { name: 'Engage', icon: 'Icon4.png' },
  { name: 'Listen', icon: 'Icon5.png' },
  { name: 'Report', icon: 'Icon6.png' }
]

const NavbarMenu: React.FC = () => {
  return (
    <Flex
      w={'208px'}
      h='90vh'
      bg='#1D1D1D'
      flexDirection={'column'}
      alignItems='center'
    >
      <Flex
        flexDir={'row'}
        alignItems='center'
        justifyContent={'space-between'}
        px='25px'
        py='20px'
      >
        <Image src='Icon1.png' pr={'15px'} />
        <Text
          fontStyle='normal'
          fontWeight='500'
          fontSize='14px'
          lineHeight='17px;'
        >
          NOTIFICATIONS
        </Text>
      </Flex>
      <Accordion>
        {LinkItems.map((val, index) => {
          return (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Image src={val.icon} />
                  <Box flex='1' textAlign='left'>
                    {val.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Flex>
  )
}
export default NavbarMenu
