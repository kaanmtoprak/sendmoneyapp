import { Flex, Text } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  let today = new Date();
  let year = today.getFullYear()
  return (
    <>
      <Flex w="100%" className='footerbottom' justifyContent="center" alignItems="center" >
        <Text fontSize="14px" color="grey" m="10px">
           Copyright© All Right Reserved  {year} 
        </Text>

      </Flex>
    </>
  )
}

export default Footer