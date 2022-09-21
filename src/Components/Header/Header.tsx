import { Avatar, Flex, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
const HeaderItems: Array<{
  name: string
  icon: string
}> = [
  {
    name: 'Published',
    icon: 'Color1.png'
  },
  {
    name: 'Scheduled',
    icon: 'Color2.png'
  },
  {
    name: 'Need Approval',
    icon: 'Color3.png'
  },
  {
    name: 'Error',
    icon: 'Color4.png'
  },
  {
    name: 'Notes',
    icon: 'Color5.png'
  }
]

const Header: React.FC = () => {
  return (
    <Flex
      flexDirection={'row'}
      alignItems='start'
      justifyContent={'space-evenly'}
    >
      <Flex flexDirection={'row'} mt='35px'>
        {HeaderItems.map((val, index) => {
          return (
            <Text
              key={index}
              fontStyle='normal'
              fontWeight='500'
              fontSize='14px'
              lineHeight='17px'
              letterSpacing='0.14px'
              color={'black'}
              pl='10px'
              pr={'10px'}
            >
              {val.name}
            </Text>
          )
        })}
      </Flex>

      <Avatar
        name='Kola Tioluwani'
        src='https://bit.ly/tioluwani-kolawole'
        mt={'17'}
        transform='translateX(750px);'
      />
    </Flex>
  )
}
export default Header
