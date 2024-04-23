import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading,Box,Button,Card,CardBody} from '@chakra-ui/react'
import Input from './Input'



function App() {
  const[flag, setFlag] = useState(false);
  const clickHandler = () => {
    setFlag(true);
    setTimeout( () => setFlag(false),2000)
  }

  return (
    <>
      <Box>
        <Heading size='lg'>Amazon Login Page</Heading>
        <br/>
        <Input />
        <br/>
        <Button colorScheme='blue' variant='outline' onClick={clickHandler}>Submit</Button>
      </Box>
      <br/>
    {flag && <Card>
              <CardBody>
                <Heading>Form submitted successfully</Heading>
              </CardBody>
              </Card>}
    
      
    </>
  )
}

export default App
