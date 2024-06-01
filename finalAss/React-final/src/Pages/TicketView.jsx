import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIndicator from '../Components/LoadingIndicator';
import ErrorIndicator from '../Components/ErrorIndicator';
import {
  Card, CardHeader, CardBody, CardFooter,
  Stack, StackDivider, HStack,
  Box, Heading, Text, Button,
  Container
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function TicketView() {

  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  async function fetchAndUpdateData(id) {
    setLoading(true);
    try {

      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/${id}`,
      });

      let data = res?.data;
      setLoading(false);
      setTicket(data);

    } catch (error) {
      setLoading(false);
      setError(true)
    }
  }


  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);


  async function deleteTicket() {
    try {

      let res = await axios({
        method: 'delete',
        url: `http://localhost:3000/tickets/${id}`,

      });

      if (res.status === 200) {
        navigate(`/ticket`);
      }

    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  const { title, description, assignee, status, priority } = ticket
  return (
    <>
      <Container py={'2em'}>
        <Card>
          <CardHeader>
            <Heading size='md'>{title}</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  description
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {description}
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  assignee
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {assignee}
                </Text>
              </Box>
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
              <CardFooter >
                <HStack spacing={'2em'} >
                  <Button colorScheme='pink' variant={'outline'}
                    onClick={() => {
                      navigate(`/ticket/edit/${id}`)
                    }
                    }>Edit Ticket</Button>
                  <Button colorScheme='pink' variant={'outline'}
                    onClick= { deleteTicket }>Delete Ticket</Button>

                </HStack>
              </CardFooter>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default TicketView