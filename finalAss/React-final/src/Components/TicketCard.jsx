import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,
    Stack ,StackDivider,
    Box, Heading, Text,Button} from '@chakra-ui/react';
    import { useNavigate } from 'react-router-dom';

    // Ticket card
    function TicketCard({id,title,status,priority}){
      const Navigate = useNavigate();
      return (
    <Card>
      <CardHeader>
        <Heading size='md'>{title}</Heading>
      </CardHeader>
    
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
             status
            </Heading>
            <Text pt='2' fontSize='sm'>
             {status}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              priority
            </Heading>
            <Text pt='2' fontSize='sm'>
              {priority}
            </Text>
          </Box>
          <CardFooter>
          <Button colorScheme='pink' variant={'outline'} 
          onClick={() => {
            Navigate(`/ticket/view/${id}` );
          }
          }>View Ticket</Button>
        </CardFooter>
        </Stack>
      </CardBody>
    </Card>
    
      )
    }


export default TicketCard