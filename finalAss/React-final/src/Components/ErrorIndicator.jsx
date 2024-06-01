import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

function ErrorIndicator() {
  return (
    <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
  )
}

export default ErrorIndicator