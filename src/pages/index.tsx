import { Flex, Input, Button, FormLabel, Stack, FormControl } from '@chakra-ui/react'

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

        <Stack>
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input 
              name='email' 
              type="email"
              id='email'
              focusBorderColor='pink.500'
              variant="filled"
              />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input 
              name='password' 
              type="password"
              id="password"
              focusBorderColor='pink.500'
              variant="filled"
            />
          </FormControl>

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