import React from 'react'
import {Flex,Box,Text,useMediaQuery,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  // const {data} = useTheme() 
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  return (
    <>
      <Flex  w="100%"  p='4'  justifyContent="space-between" alignItems="center" >
      <Box>
        <Text cursor="pointer" textShadow="xl" color="white" style={{fontFamily:"poppins",textShadow: "3px 3px #F56565"}} fontWeight="700" fontSize="40px" m="2"><Link to="/">Etumia</Link></Text>
      </Box>
      
          {isLargerThan768 ? <Flex ><Text color='#7F7C82' _hover="#fff" fontSize="20px" m="3"><Link  to="/">Contact Us</Link></Text>
        <Text color='#7F7C82' _hover="#fff" fontSize="20px" m="3"><Link  to="/admin">Login</Link></Text></Flex> : <Menu>
  <MenuButton><HamburgerIcon color="#F56565" fontSize="30px"/> </MenuButton>
  <MenuList>
  <Link to="/"> <MenuItem>Contact Us</MenuItem></Link>
  <Link to="/admin"><MenuItem>Login</MenuItem></Link>

  </MenuList>
</Menu> }
        
        {/*
        
 <Flex > <HamburgerIcon color="#F56565" fontSize="30px"/> </Flex>
        
        
       
         <Menu>
  <HamburgerIcon color="#F56565" fontSize="30px"/> 
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        */}
      {/* <Link to="/contact"><Text m="5">Contact</Text></Link>
      <Link to="/login"><Text  m="5" >Login</Text></Link> */}
     
      </Flex>
    </>
  )
}

export default Header