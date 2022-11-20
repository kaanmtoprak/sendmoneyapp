import {useState,useCallback,useEffect,useRef} from 'react'
import axios from 'axios';
import {Flex,Container,Box,Button,Input,FormControl,FormLabel,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,Text,Selecet, Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,RadioGroup,Radio,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup,
  useToast,
  Badge } from '@chakra-ui/react';
  import {EditIcon,DeleteIcon,ViewOffIcon,ViewIcon} from '@chakra-ui/icons'
import TRY from '../../../images/flags/TRY.png'
import BIF from '../../../images/flags/BIF.png'
import KES from '../../../images/flags/KES.png'
import RWF from '../../../images/flags/RWF.png'
import TZS from '../../../images/flags/TZS.png'
import UGX from '../../../images/flags/UGX.png'
import USD from '../../../images/flags/USD.png'




const Currency = () => {
  const initRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currency,setCurrency] = useState({
      name:"",
      price:""
  });
  const [active,setActive] = useState(true)
  const [curr,setCurr] = useState([]);
  const toast = useToast()
  const [fetchLoading,setFetchLoading] = useState(true)
  const flags = [{
    name:"TRY",
    url:TRY
  },{
    name:"KES",
    url:KES
  },{
    name:"BIF",
    url:BIF
  },{
    name:"RWF",
    url:RWF
  },{
    name:"TZS",
    url:TZS
  },{
    name:"UGX",
    url:UGX
  },{
    name:"USD",
    url:USD
  },]
  const fetchCurrencies = async () =>{
    setFetchLoading(true)
    try {
    const data =   await axios.get(`${process.env.REACT_APP_BASE_URL}/get-currency`)
    setCurr(data.data.data)
    console.log(curr)



    } catch (error) {
      console.log(error)
    }
    setFetchLoading(false)
  }


  useEffect(()=>{ 
    fetchCurrencies();
  },[])

  const handleChange = (e)=>{
    setCurrency({...currency,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
   await axios.post(`${process.env.REACT_APP_BASE_URL}/create-currency`,currency)
   .then((data)=>{
    setCurrency({
      name:"",
      price: ""
  });
  console.log(data)
  fetchCurrencies();
   })
   .then(()=>{
    toast({
      title: 'Currency created.',
      position: 'top-right',
      description: "Created a new currency.",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
   })
   .catch((err)=>{
    console.log(err)
   })
   



     

    

  }
  const handleDelete = async (_id,onClose) =>{
    console.log(_id)
    
    await axios.post(`${process.env.REACT_APP_BASE_URL}/delete-currency`,{_id})
    .then((response)=>{
      onClose();
      toast({
        title: 'Currency deleted.',
        position: 'top-right',
        description: "Currency succesfully deleted.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      console.log(response)

    })
    .then(()=>{
      fetchCurrencies();
    })
    .catch(err=>console.log(err))
  }


  const handleView = async (_id,activity)=>{

    
    // setActive(!active)
    console.log(_id,activity,active)
    await axios.post(`${process.env.REACT_APP_BASE_URL}/edit-currency-activity`,{_id,activity:!activity})
    .then((data)=>{
      fetchCurrencies();
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  return (
    <>
    <Container boxShadow="base" rounded="5" maxW="xxl">

      <Flex p="5" justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl">Currencies</Text>
        <Button colorScheme="green" onClick={onOpen}>Add Currency +</Button>
      </Flex>

    </Container>
    <Container mt="5" boxShadow="base" rounded="5" maxW="xxl">
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>You can add, edit and delete a currency.</TableCaption>
    <Thead>
      <Tr>

        <Th>Currency Name</Th>
        <Th >Active / Passive</Th>
        <Th >Price</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
    {
     fetchLoading ? <Tr><Td>Loading...</Td></Tr> : curr.map((e,i)=> (

        <Tr key={i}>

        <Td fontWeight="500">{e.name}</Td>
        <Td ><Badge colorScheme={e.activity ? "green" : "red"}>{e.activity ? "Active" : "Passive"}</Badge></Td>
        <Td >{e.price}</Td>
        <Td >
        <EditIcon cursor="pointer" fontSize="18px" color="orange" m="1" />
        
        {/* <Popover>
  <PopoverTrigger>
  <DeleteIcon cursor="pointer" fontSize="18px" color="red" m="1" />
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure to delete?</PopoverBody>
    <PopoverFooter>
    <ButtonGroup size='sm'>
              <Button onClick={onClose} variant='outline'>Cancel</Button>
              <Button onClick={()=>handleDelete(e._id)} colorScheme='red'>Delete</Button>
            </ButtonGroup>
    </PopoverFooter>
  </PopoverContent>
</Popover> */}



<Popover closeOnBlur={false} placement='bottom' initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
          <DeleteIcon cursor="pointer" fontSize="18px" color="red" m="1" />
          </PopoverTrigger>

            <PopoverContent>
              <PopoverHeader>This is the header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>Are you sure to delete?</PopoverBody>
              <PopoverFooter>

                <ButtonGroup size='sm'>
              <Button ref={initRef} onClick={onClose} variant='outline'>Cancel</Button>
              <Button ref={initRef} onClick={()=>handleDelete(e._id,onClose)} colorScheme='red'>Delete</Button>
            </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>

        </>
      )}
    </Popover>







       {!e.activity ?  <ViewOffIcon onClick={()=>handleView(e._id,e.activity)} cursor="pointer" fontSize="18px" color="grey" m="1"/>:
        <ViewIcon onClick={()=>handleView(e._id,e.activity)} cursor="pointer" fontSize="18px" color="green" m="1"/>}
        </Td>
      </Tr>


  )
     )  
     }
    </Tbody>
   
  </Table>
</TableContainer>


    </Container>

    {/* Form Modal */}

    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
         <form onSubmit={handleSubmit}>
         <ModalBody>
            <FormControl>
              <FormLabel>Select a Currency</FormLabel>
              <Select value={currency.name} name="name" onChange={(e)=>{handleChange(e)}}>
                <option >Select a currency</option>
                <option value="TRY">TRY</option>
                <option value="KES">KES</option>
                <option value="TZS">TZS</option>
                <option value="UGX">UGX</option>
                <option value="RWF">RWF</option>
                <option value="BIF">BIF</option>
                <option value="USD">USD</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="number" name='price' onChange={(e)=>{handleChange(e)}} value={currency.price} placeholder="Only Numbers"/>
            </FormControl>

          
          
          
          
          </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type='submit' colorScheme='green' onClick={onClose} >Add Currency +</Button>
            </ModalFooter>
         </form>
        </ModalContent>
      </Modal>








    </>
  )
}

export default Currency