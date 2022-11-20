import { FormControl,Textarea,Button, FormLabel, Flex, Box, Input } from '@chakra-ui/react';
import {useState} from 'react'
import { useTheme } from '../../../contexts/ThemeContext';
import axios from 'axios'

const Tsettings = () => {
    // const {data} = useTheme();
    const {announce,setAnnounce,BASE_URL,editAnnounce,setEditAnnounce,editInformation,setEditInformation,information,header,setHeader,editHeader,setEditHeader} = useTheme();
    const [colors,setColor] = useState({
        primaryColor: "",
        secondaryColor:"",
        textColor:""

    })
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/announce`,editAnnounce)
            .then((data)=>{
                console.log(data)
            })
        } catch (error) {
            console.log(error)
        }



    }
    const handleSubmitInfo = async (e) =>{
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/information`,editInformation)
            .then((data)=>{
                console.log(data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    
    const handleSubmitHeader = async (e) =>{
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/header`,editHeader)
            .then((data)=>{
                console.log(data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    const handleColor = (e)=>{
        setColor({...colors,[e.target.name]:e.target.value})
        console.log(colors)

    }
  return (
    <>

        <Flex flexDirection="row">
        <Flex flexDirection="column">
<Box mb="5">
<form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Edit Your  Announce! </FormLabel>
                <Textarea  maxLength="60" value={editAnnounce.announce} onChange={(e)=>setEditAnnounce({_id:announce._id,announce:e.target.value})}/>
                <small>Current Announce : {announce.announce}</small>


            </FormControl>
            <Button type='submit' mt={5} colorScheme="green">Edit Announce!</Button>
</form>
</Box>
<Box mb="5">
<form  onSubmit={handleSubmitInfo}>
            <FormControl>
                <FormLabel>Edit Your  Information! </FormLabel>
                <Textarea  maxLength="60" value={editInformation.information} onChange={(e)=>setEditInformation({_id:information._id,information:e.target.value})}/>
                <small>Current Information : {information.information}</small>


            </FormControl>
            <Button type='submit' mt={5} colorScheme="green">Edit Information!</Button>
</form>
</Box>

<Box mb="5">
<form  onSubmit={handleSubmitHeader}>
            <FormControl>
                <FormLabel>Edit Your  Header! </FormLabel>
                <Textarea  maxLength="60" value={editHeader.header} onChange={(e)=>setEditHeader({_id:header._id,header:e.target.value})}/>
                <small>Current Header : {header.header}</small>


            </FormControl>
            <Button type='submit' mt={5} colorScheme="green">Edit Header!</Button>
</form>
</Box>





</Flex>

        <Flex m="5" ml="5" >
            <form >
                        

            
            <Box>
                <FormControl>
                    <FormLabel>Primary Color</FormLabel>
                    <Input type="color" name='primaryColor' value={colors.primaryColor} onChange={handleColor} />
                </FormControl>
            </Box>    
            <Box>
                <FormControl>
                    <FormLabel>Secondary Color</FormLabel>
                    <Input type="color" name='secondaryColor' value={colors.secondaryColor} onChange={handleColor} />
                </FormControl>
            </Box>    
            <Box>
                <FormControl>
                    <FormLabel>Primary Color</FormLabel>
                    <Input type="color" name='textColor' value={colors.textColor} onChange={handleColor} />
                </FormControl>
            </Box> 


            <Button mt="5" colorScheme="green" type="submit">Send</Button>
            
            

            </form>
        
        </Flex>
        </Flex>



    </>
  )
}

export default Tsettings