import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  useDisclosure,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { RepeatIcon, ChevronDownIcon } from "@chakra-ui/icons";
import supportedIcons from "../../../images/supported.png";
import TRY from "../../../images/flags/TRY.png";
import BIF from "../../../images/flags/BIF.png";
import KES from "../../../images/flags/KES.png";
import RWF from "../../../images/flags/RWF.png";
import TZS from "../../../images/flags/TZS.png";
import UGX from "../../../images/flags/UGX.png";
import USD from "../../../images/flags/USD.png";

import { useState,useEffect } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import { useFormik } from "formik";
import { useRates } from "../../../contexts/RatesContext";

const Home = () => {
  const [turnCycle, setturnCycle] = useState(true);
  const { announce, information, header } = useTheme();
  const {currencies,activeCurrencies} = useRates();

  const flags = [
    {
      name: "TRY",
      url: TRY,
    },
    {
      name: "KES",
      url: KES,
    },
    {
      name: "BIF",
      url: BIF,
    },
    {
      name: "RWF",
      url: RWF,
    },
    {
      name: "TZS",
      url: TZS,
    },
    {
      name: "UGX",
      url: UGX,
    },
    {
      name: "USD",
      url: USD,
    },
  ];


  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal = useDisclosure();

  const [denemez,setdenemez] = useState(null);



// let starters = activeCurrencies.find(i => i.name==="KES")


const [radioOne,setRadioOne] = useState({
  currency:"TRY",
  price:1
});

const [inputOne,setInputOne] = useState({
  price:radioOne.price,
  currency:radioOne.currency
});

const [radioTwo,setRadioTwo] = useState({
  currency:"KES",
  price:18
});
const [inputTwo,setInputTwo] = useState({
  price:radioTwo.price,
  currency:radioTwo.currency
});
const handleChangeOne = (e) =>{
  setInputOne({...inputOne,[e.target.name]:e.target.value})
  setInputTwo({...inputTwo,price:e.target.value * radioTwo.price})
  console.log(inputOne)
};
const handleChangeTwo = (e) =>{
  setInputTwo({...inputTwo,[e.target.name]:e.target.value })
  setInputOne({...inputOne,price:e.target.value / radioTwo.price})
};
const handleChangeOneRadio = async (e,element) =>{

console.log(e.target.value)
setdenemez(element)
setRadioOne({currency:element.name,price:element.price})
console.log(denemez)
console.log(radioOne)
};
const handleChangeTwoRadio = (e,element) =>{
  setRadioTwo({currency:element.name,price:element.price})
  console.log(radioTwo)
};
const handleSubmit = (e) =>{
e.preventDefault();
};












useEffect(()=>{
  // if(activeCurrencies!== null){
  //   const ks = activeCurrencies.find(i => i.name==="KES")
  //   setRadioTwo({...radioTwo,price:ks.price})
  //   // console.log(ks)
  // }
  // console.log(activeCurrencies)
  

},[activeCurrencies,denemez,setRadioTwo,radioTwo]);



  return (
    <Box className="mainBody">
      <Container maxW="xl">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text
              fontFamily="poppins"
              fontWeight="700"
              color="#7F7C82"
              textAlign="center"
              fontSize="20px"
            >
              {header.header !== null ? header.header : <></>}
            </Text>
          </Box>
          <Box
            p="7"
            mt="5"
            maxW="400px"
            bg="#ffffff"
            boxShadow="xl"
            rounded="26"
          >
            <Box mb="7">
              <Text fontWeight="500" color="#7F7C82" m="3">
                1 USD ($) = 18.7 TRY (₺)
              </Text>
              <Text fontWeight="500" fontSize="sm" color="#7F7C82" m="3">
                {information.information !== null ? (
                  information.information
                ) : (
                  <></>
                )}
              </Text>
            </Box>
            <form onSubmit={handleSubmit}>
              <div className="inputblock">
                <input
                  onChange={(e)=>{

                    handleChangeOne(e)
                  }}
                  name="price"
                  value={
                    turnCycle ? inputOne.price : inputTwo.price
                  }
                  type= "number"
                  id="input-text"
                  required
                  spellCheck="false"
             
                />
                <span className="placeholder">
                 You Send
                </span>
                <Box
                  cursor="pointer"
                  ml="5"
                  className="select"
                  onClick={modal.onOpen}
                  display="flex"
                  flexDirection="row"
                >
                  <img src={turnCycle ? TRY : KES} alt="" />
                  <Text fontWeight="500">
                    {turnCycle
                      ? radioOne.currency
                      : radioOne.currency}
                    <ChevronDownIcon ml="2 " />
                  </Text>
                </Box>
                <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                      {
                        activeCurrencies !== null ? activeCurrencies.map((element,index)=>{

                        
                          return(
                         

                                <Flex key={index} flexDirection="row" alignItems="center" justifyContent="space-around" borderBottom="1px solid #e2e2e2">

                                {
                                  flags.map((flag,flagIndex)=>(

                                      flag.name === element.name && <img key={flagIndex} src={flag.url} alt=" "/>
)
                                    
                                  )
                                }
                                <input type="radio"  onChange={(e)=>handleChangeOneRadio(e,element)} value={element.name} name="currency"/>
                                {/* <RadioGroup name="inputOne.currency" onChange={handleChange} value={values.inputOne.currency}>
                                  <Stack direction='column'>
                                  <Radio  value={active}><Flex alignItems="center" justifyContent="space-around">
                                  {active}                                
                                  {
                                  flags.map((flag,flagIndex)=>(
                                  
                                      flag.name === activeItem && <img key={flagIndex} src={flag.url} alt=" "/>
                                   )
                                    
                                  )
                                }
                                    
                                    </Flex></Radio>
                                          </Stack>
                                        </RadioGroup> */}
                            </Flex>
                              
                          )
                        }):<></>
                      }
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={modal.onClose}>
                        Close
                      </Button>
                      <Button type="submit" onClick={()=>console.log(inputOne,inputTwo)} variant="ghost">
                        Secondary Action
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
              <Box textAlign="center">
                <RepeatIcon
                  className={turnCycle ? "iconLeft" : "iconRight"}
                  onClick={() => setturnCycle(!turnCycle)}
                  cursor="pointer"
                  color="white"
                  bg="#F56565"
                  fontSize="40px"
                  m="2"
                  p="1"
                  rounded="50"
                />
              </Box>
              <div className="inputblock">
                <input
                  onChange={handleChangeTwo}
                  type="number"
                  name="price"
                  value={
                    turnCycle ? inputTwo.price : inputOne.price
                  }
                  id="input-text-2"
                  required
                  spellCheck="false"
             
                />
                <span className="placeholder">
               Recipient gets
                </span>
                <Box
                  cursor="pointer"
                  ml="5"
                  className="select"
                  onClick={onOpen}
                  display="flex"
                  flexDirection="row"
                >
                  <img src={turnCycle ? KES : TRY} alt="" />
                  <Text fontWeight="500">
                    {turnCycle
                      ? radioTwo.currency
                      : radioTwo.currency}
                    <ChevronDownIcon ml="2 " />
                  </Text>
                </Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

{
  activeCurrencies !== null ? activeCurrencies.map((element,index)=>{

  
    return(
   

          <Flex key={index} flexDirection="row" alignItems="center" justifyContent="space-around" borderBottom="1px solid #e2e2e2">

          {
            flags.map((flag,flagIndex)=>(

                flag.name === element.name && <img key={flagIndex} src={flag.url} alt=" "/>
)
              
            )
          }
          <input type="radio" onChange={(e)=>handleChangeTwoRadio(e,element)} value={element.name} name="currency"/>
          {/* <RadioGroup name="inputOne.currency" onChange={handleChange} value={values.inputOne.currency}>
            <Stack direction='column'>
            <Radio  value={active}><Flex alignItems="center" justifyContent="space-around">
            {active}                                
            {
            flags.map((flag,flagIndex)=>(
            
                flag.name === activeItem && <img key={flagIndex} src={flag.url} alt=" "/>
             )
              
            )
          }
              
              </Flex></Radio>
                    </Stack>
                  </RadioGroup> */}
      </Flex>
        
    )
  }):<></>
}
</ModalBody>
<ModalFooter>
<Button colorScheme="blue" mr={3} onClick={onClose}>
  Close
</Button>
<Button type="submit" onClick={()=>console.log(inputOne,inputTwo)} variant="ghost">
  Secondary Action
</Button>
</ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
              <Box mb="7" p="1px 15px" mt="5">
                <Text color="grey" fontSize="1rem">
                  Should arrive in 5 minutes
                </Text>
              </Box>
              <Button
                type="submit"
                w="100%"
                rounded="50"
                _hover={{ backgroundColor: "#f37d7d" }}
                color="#fff"
                bg="#F56565"
              >
                Continue to send
              </Button>
            </form>
          </Box>
          <Box
            bg="red.400"
            p="7"
            mt="5"
            maxW="400px"
            boxShadow="xl"
            rounded="26"
          >
            <Flex mb="5" alignItems="center">
              <Text fontSize="1rem" fontWeight="600" color="#fff">
                Announcement
              </Text>
            </Flex>
            <Text fontSize="1rem" fontWeight="600" color="#fff">
              {announce.announce !== null ? announce.announce : <></>}
            </Text>
          </Box>
          <Box maxW="400px" mt="7">
            <Box>
              <Text
                textAlign="center"
                fontSize="1rem"
                mb="3"
                fontWeight="600"
                color="#7F7C82"
              >
                Supported by mobile wallets and banks.
              </Text>
            </Box>
            <Box>
              <img src={supportedIcons} alt="" srcSet="" />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
