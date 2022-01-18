import { Button, Flex, Stack } from '@chakra-ui/react'
import Input from '../components/Form/Input'

export default function Home(){
  return(
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >

      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        padding="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input type="email" name="email" label="E-mail"/>
          <Input type="password" name="password" label="Senha"/>
          <Button 
            type='submit'
            marginTop="6"
            colorScheme="pink"
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}