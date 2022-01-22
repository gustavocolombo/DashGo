import { Flex, Input, Text, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export default function Header(){
  return(
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      alignItems="center"
      mx="auto"
      mt="4"
      px="6"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
        <Text
          as="span"
          color="pink.500"
          ml="1"
        >
          .
        </Text>
      </Text>

      {/* search-box */}
      <Flex
        width='100%'
        maxWidth={400}
        color="gray.200"
        flex="1"
        px="8"
        py="4"
        ml="6"
        alignSelf="center"
        bg="gray.800"
        position="relative"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder='Buscar na plataforma'
          _placeholder={{color: 'gray.400'}}
        />

        <Icon as={RiSearchLine} fontSize="20"/>
      </Flex>
    </Flex>
  )
}