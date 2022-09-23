import { Flex, SimpleGrid, Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons/lib'

const waitpost: Array<{
  socialMediaIcon: string
  dateandtime: string
  rejectionicon: IconType
  deleteicon: IconType
  detailicon: IconType
  desc: string
  photo: string
  likeicon: IconType
  likeamount: string
  commenticon: IconType
  shareicon: IconType
  shareamount: string
  displayicon: IconType
  displayamount: string
}> = [{}]

const WaitPost: React.FC = () => {
  return (
    <Flex alignItems={'center'} justifyContent='center'>
      <SimpleGrid>
        <Box bg={'#CBD5E0'} width='369px' height='446px' borderRadius={'md'}>
          <Flex flexDirection={'row'}>
            <Box
              width='60px'
              height='446px'
              background='#3AC183'
              borderLeftRadius={'md'}
              display='flex'
              alignItems={'center'}
              justifyContent='center'
            >
              <Image src='Object.svg' />
            </Box>
            <Flex flexDirection={'column'}>
              <Flex flexDirection={'row'}>
                <Text
                  fontSize={'14px'}
                  color={'rgba(172, 172, 172, 1)'}
                  pr='60px'
                  pt='10px'
                  pl={'10px'}
                >
                  14 January 2016 - 14:30
                </Text>

                <Image src='rejects.svg' pr={'10px'} pt='10px' />
                <Image src='deletes.svg' pr={'10px'} pt='10px' />
                <Image src='details.svg' pr={'10px'} pt='10px' />
              </Flex>
              <Text
                fontSize={'14px'}
                color={'rgba(172, 172, 172, 1)'}
                textAlign='start'
                pl={'10px'}
              >
                Lorem ipsum dolor sit amet, consecteturat adipiscing elit, sed
                do eiusmod.
              </Text>
              <Image
                src='cat.webp'
                width='284px'
                height='239px'
                mt={'15px'}
                alignSelf={'center'}
              />
              <Flex
                flexDirection={'row'}
                alignItems='start'
                justifyContent={'space-around'}
                mt='80px'
              >
                <Image src='likes.svg' />
                <Text>0</Text>
                <Image src='comments.svg' />
                <Text>0</Text>
                <Image src='share.svg' />
                <Text>0</Text>
                <Image src='display.svg' />
                <Text>0</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}
export default WaitPost
