import React from 'react'
import { Box, Heading, Image, Text,  } from '@chakra-ui/react'

function About() {
  return (
    <div style={{ position: "relative" }}>
      <Image h={'35em'} w={'100%'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiVqpNd0zv349lznWpZI0-KKoEyp-sFiA_g&s' />
     
        <Box p={'30px'}>
          <Heading m={'1em'} size={'xl'}>ABOUT US :</Heading>
          <Text>
            Teaching is one of the most challenging
            and complex jobs on the planet. Our digital
            resources, tools, and learning materials are
            developed by educational experts to incorporate
            leading pedagogical practices. They are useful in
            any type of teaching moment and many can be used
            to support national education standards.

          </Text>
          
          <Heading m={'1em'} size={'lg'}>Unique experiences</Heading>
          <Text>

            There is no such thing as
            "one size fits all" in education;
            each educator and child has unique
            challenges and goals. We celebrate the
            diversity of our users by offering differentiated
            resources that can meet a wide range of educational needs -
            and raise kids' confidence in learning.
          </Text>
        </Box>
    
    </div>

  )
}

export default About