import React from 'react'
import {Card,CardHeader,CardBody,CardFooter,Image,Stack,Heading,Text,Center,HStack,Box,Button,Flex,Spacer} from '@chakra-ui/react'

const BeautifulCard = () => {
  return (
   <Card maxW={{base:'300px',sm:'500px' }}>
        <CardBody>
        <Center>
        <Image
            borderRadius='full'
            boxSize='150px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            textAlign='center'
        />
        </Center>
      <Stack mt='6' spacing='3'>
      <Heading size='lg'>Dan Abramov</Heading>
      <Heading size='md' color='gray'>@dan_ abramov34</Heading>
      <Text fontSize='xl'>
        Actor, musician, songwriter <br/> and artist. PM for work inquires <br/> or  
        <br/><Text color='#1DA1F2'>#tag </Text> me in your posts
      </Text>
      <HStack spacing={{base:'2',sm:'3',md:'4',lg:'5'}}>
        <Box p={[1,3,4]} bg='#F5F5F5'>#ART</Box>
        <Box p={[1,3,4]} bg='#F5F5F5'>#PHOTOGRAPHY</Box>
        <Box p={[1,3,4]} bg='#F5F5F5'>#MUSIC</Box>
      </HStack>
    </Stack>
    <br/>
    <Flex justify='space-around'> 
        <Button variant='outline' borderRadius='40px' p={6} pl={9} pr={9}>Message</Button>
        <Button variant='solid' colorScheme='blue' borderRadius='40px'  p={6} pl={9} pr={9}>Follow</Button>
    </Flex>
    
    </CardBody>
   
      
  </Card>
  )
}

export default BeautifulCard;