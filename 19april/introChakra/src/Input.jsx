import { Input,InputGroup,InputRightElement,Button,Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function PasswordInput() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <Stack spacing={1}>
      <Input placeholder='Enter User-id' size='md' focusBorderColor='black'/>
      
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          focusBorderColor='black'
        />
        <InputRightElement width='4.5rem'>
          <Button size='sm'  onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      </Stack>
    )
  }
  export default PasswordInput;