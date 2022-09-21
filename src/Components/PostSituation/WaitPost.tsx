import { Flex, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'

const waitpost: Array<{}> = [{}]

const WaitPost: React.FC = () => {
  return (
    <Flex alignItems={'center'} justifyContent='center'>
      <SimpleGrid>
        <Box></Box>
      </SimpleGrid>
    </Flex>
  )
}
export default WaitPost
