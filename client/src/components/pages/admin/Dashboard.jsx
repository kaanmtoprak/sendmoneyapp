import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container,Text, Box } from '@chakra-ui/react'
import Information from './Information'
import Currency from './Currency'
import Tsettings from './Tsettings'

const Dashboard = () => {
  return (
    <>

<Container maxW="1400px">
<Box mb="20px">
<Text  fontSize="30px" fontWeight="500" mb="20px">
    Welcome Admin {process.env.DENEME}
  </Text>
  <Text>
    You can control your theme settings and add/edit/delete currencies.
  </Text>
</Box>

<Tabs variant='enclosed'>
  <TabList>
    <Tab>Informations</Tab>
    <Tab>Currency</Tab>
    <Tab>Theme Settings</Tab>
    <Tab>Users</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Information/>
    </TabPanel>
    <TabPanel>
      <Currency/>
    </TabPanel>
    <TabPanel>
      <Tsettings/>
    </TabPanel>
    <TabPanel>
      Users
    </TabPanel>
  </TabPanels>
</Tabs>




</Container>


    </>
  )
}

export default Dashboard