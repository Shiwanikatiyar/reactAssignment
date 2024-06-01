import { Link } from "react-router-dom";
import { Flex,Button } from "@chakra-ui/react";
import { useContext } from "react";
import {AuthContext} from '../Context/AuthContextProvider'

const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
  
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/ticket",
    label: "TICKET",
  },
  {
    
    to: "/login",
    label: "LOGIN",
  },
  ];

export default function Navbar() {

  const {logout} = useContext(AuthContext);

  return (
    <Flex className="navbar" 
     border="1px solid" px={10} py={1}
     display="flex" 
    alignItems="center" 
    justifyContent="space-around" 
    background="pink.100" padding="4">

      {links?.map((link) => (
        <Link to={link.to} key={link.to}>
          {link.label}
        </Link>
      ))}
      <Button colorScheme= 'pink' variant = 'outline' onClick={logout}>LOGOUT</Button>
    </Flex>
  );
}
