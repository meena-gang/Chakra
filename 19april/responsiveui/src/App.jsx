import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message'
import {Text,Card,CardHeader,CardBody,Heading,Flex,Spacer} from '@chakra-ui/react'

function App() {
  let description = <Text noOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed placerat mauris quis metus semper, quis efficitur erat viverra.</Text>

  return (
    <>
    <Card>
      <CardHeader>
        <Heading size='lg'>Our Clients Speak</Heading>
        <Text size='sm'>We have been working with clients around the world</Text>  
      </CardHeader>
      <CardBody>
     <Flex direction={{sm:'column',md:'column', lg:'row'}}>
      <Message heading="Efficient Collabrating" desc={description} name="Jane Cooper" designation="CEO at ABC corporation"/>
      <Spacer />
      <Message heading="Intitutive Design" desc={description} name="Jane Cooper" designation="CEO at ABC corporation"/>
      <Spacer/>
      <Message heading="Mindblowing Service" desc={description} name="Jane Cooper" designation="CEO at ABC corporation"/>
      </Flex> 
      </CardBody>
     
    </Card>
    </>
  )
}

export default App
