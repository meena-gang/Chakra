import React from 'react';
import {Box, Heading,Text,Image,CardBody,CardHeader,Card} from '@chakra-ui/react';

const Message = ({heading,desc,name,designation}) => {
  return (
    <div>
        <center>
        <Box p='20px'>
        <Card maxW='sm'>
            <CardBody>  
              <Heading size='md'>{heading}</Heading>
              <Text pt='8px'>{desc}</Text> 
            </CardBody>
        </Card>
        <br/>
        <Box>
        <center>
        <Image
            borderRadius='full'
            boxSize='50px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
        />
        </center>
        <Heading size='sm'>{name}</Heading>
        <Text size='sm' color='gray'>{designation}</Text>
        </Box>
        </Box>
        </center>
    </div>
  )
}

export default Message