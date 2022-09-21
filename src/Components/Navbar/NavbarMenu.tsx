import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { MinusIcon } from '@chakra-ui/icons'
interface LinkItemProps {
  name: string
  icon: string
  moreicon: string
  lessicon: string
}
const LinkItems: Array<LinkItemProps> = [
  {
    name: 'NOTIFICATION',
    icon: 'Icon1.png',
    moreicon: 'SeeMore.png',
    lessicon: 'SeeLess.png'
  },
  {
    name: 'PUBLISH',
    icon: 'Icon2.png',
    moreicon: 'SeeMore.png',
    lessicon: 'SeeLess.png'
  },
  {
    name: 'ENGAGE',
    icon: 'Icon4.png',
    moreicon: 'SeeMore.png',
    lessicon: 'SeeLess.png'
  },
  {
    name: 'LISTEN',
    icon: 'Icon5.png',
    moreicon: 'SeeMore.png',
    lessicon: 'SeeLess.png'
  },
  {
    name: 'REPORT',
    icon: 'Icon6.png',
    moreicon: 'SeeMore.png',
    lessicon: 'SeeLess.png'
  }
]

const NavbarMenu: React.FC = () => {
  const [buttonValue, setButtonValue] = useState(false)
  return (
    <Flex
      w={'208px'}
      h='90vh'
      bg='#484F58'
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
        <Image src='notf.svg' pr={'15px'} />
        <Text
          fontStyle='normal'
          fontWeight='500'
          fontSize='14px'
          lineHeight='17px;'
        >
          NOTIFICATIONS
        </Text>
      </Flex>
      <Accordion w={'full'} defaultIndex={[0]} allowMultiple>
        {LinkItems.map((val, index) => {
          return (
            <AccordionItem key={index}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    bg={'#484F58'}
                    w='full'
                    _focus={{
                      bg: '#F55661'
                    }}
                  >
                    <Image src={val.icon} pr='15px' />
                    <Box flex={'1'} textAlign='left'>
                      {val.name}
                    </Box>

                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>

                  <AccordionPanel pb={4} border='0' bg={'rgba(49, 54, 59, 1)'}>
                    <UnorderedList>
                      <ListItem
                        _hover={{
                          color: 'rgba(245, 86, 97, 1)'
                        }}
                      >
                        <LinkBox>
                          <LinkOverlay href='/#'>
                            Lorem ipsum dolor sit amet
                          </LinkOverlay>
                        </LinkBox>
                      </ListItem>
                      <ListItem
                        _hover={{
                          color: 'rgba(245, 86, 97, 1)'
                        }}
                      >
                        <LinkBox>
                          <LinkOverlay href='/#'>
                            Lorem ipsum dolor sit amet
                          </LinkOverlay>
                        </LinkBox>
                      </ListItem>
                      <ListItem
                        _hover={{
                          color: 'rgba(245, 86, 97, 1)'
                        }}
                      >
                        <LinkBox>
                          <LinkOverlay href='/#'>
                            Lorem ipsum dolor sit amet
                          </LinkOverlay>
                        </LinkBox>
                      </ListItem>
                      <ListItem
                        _hover={{
                          color: 'rgba(245, 86, 97, 1)'
                        }}
                      >
                        <LinkBox>
                          <LinkOverlay href='/#'>
                            Lorem ipsum dolor sit amet
                          </LinkOverlay>
                        </LinkBox>
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          )
        })}
      </Accordion>
    </Flex>
  )
}
export default NavbarMenu
