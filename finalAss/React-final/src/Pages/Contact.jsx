import React from 'react'
import {Heading,Text,Link, Box , VStack} from '@chakra-ui/react'

function Contact() {
  return (
    <div style={{textAlign: "center", margin: '20px'}}>
      <VStack>
    <Heading p={'1em'} style={{fontSize: "4em"}}>Contact Us</Heading>
    <Text style={{fontSize: '2em'}} >We know that choosing the right institute or a career path 
      can be a difficult and tiring process, and that's why we're here 
      for you. Contact us to ask any questions, we'll respond over email 
      s soon as possible!</Text>
      <Heading as={'b'} style={{fontSize: "3em",margin: "25px"}} >Write to us at</Heading>
      <Box>
      <Link style={{color: "blue", fontSize: '2em'}}>admissions@masaischool.com</Link>
      </Box>
      </VStack>
      </div>
  )

}

export default Contact