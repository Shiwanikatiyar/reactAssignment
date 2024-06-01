import React from 'react'
import { Button, Flex, Container, SimpleGrid, Select,HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import LoadingIndicator from '../Components/LoadingIndicator';
import ErrorIndicator from '../Components/ErrorIndicator';
import TicketCard from '../Components/TicketCard';


function Tickets() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState("");
const [filterValue, setFilterValue] = useState("");


  async function fetchAndUpdateData(sortOrderValue , filterValue) {
    setLoading(true);
    try {

      let queryParams = {};
      if(filterValue){
        queryParams.status = filterValue;
      }

      if(sortOrderValue){
        queryParams._sort = "priority",
        queryParams._order = sortOrderValue;
      }

      let res = await axios({
        method: "get",
        // url: `http://localhost:3000/tickets?status=${filterValue}&_sort=priority&_order=${sortOrderValue}`,
        url: `http://localhost:3000/tickets`,
        params: queryParams,
      });

      let data = res?.data;
      setLoading(false);
      setTickets(data);

    } catch (error) {
      setLoading(false);
      setError(true)
    }
  }


  useEffect(() => {
    // console.log(`Fetching tickets with sort order: ${sortOrderValue}`);
    fetchAndUpdateData(sortOrderValue,filterValue);
  }, [sortOrderValue,filterValue]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  // console.log(`loading ${loading} - error ${error}`)
  // console.log(`ticket`,ticket)

  return (

    <Container maxW='container.lg' py={'2em'}>
      <Flex direction={'row-reverse'}>
        <Button colorScheme={'pink'} variant={'outline'} onClick={() => {
          navigate(`/ticket/create`)
        }}>Create Ticket</Button>
      </Flex>

      <HStack spacing={'4'} py={'1em'}>    
      <Select placeholder='Sort by Priority' value={sortOrderValue}
       onChange={(e) =>{
        setSortOrderValue(e.target.value);
      }}>
        <option value='asc'>Low to High</option>
        <option value='desc'>High to Low</option>
      </Select>

      <Select placeholder='Filter by Status' value={filterValue}
      onChange={(e)=> {
        setFilterValue(e.target.value);
      }}
      >
        <option value='pending'>Pending</option>
        <option value='progress'>Progress</option>
        <option value='complete'>Completed</option>      
      </Select>
      </HStack>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {
          tickets?.map((ticket) => (
            <TicketCard {...ticket} key={ticket.id}
            // key={ticket.id}
            // title={ticket.title}
            // status={ticket.status}
            // priority={ticket.priority}
            />
          ))
        }
      </SimpleGrid>
    </Container>
  )
}

export default Tickets