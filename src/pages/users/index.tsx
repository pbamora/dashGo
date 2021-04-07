import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/header";
import { Pagination } from "../../components/pagination/index";
import { SideBar } from "../../components/sidebar/index";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header></Header>

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="6">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}

                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Amora</Text>
                    <Text fontSize="sm" color="gray.300">
                      pedro.amora@berrytech.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit User"
                      icon={<Icon as={RiPencilLine} />}
                      ontSize="16"
                      variant="unstyled"
                    />
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Amora</Text>
                    <Text fontSize="sm" color="gray.300">
                      pedro.amora@berrytech.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit User"
                      icon={<Icon as={RiPencilLine} />}
                      fontSize="16"
                      variant="unstyled"
                    />
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Amora</Text>
                    <Text fontSize="sm" color="gray.300">
                      pedro.amora@berrytech.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit User"
                      icon={<Icon as={RiPencilLine} />}
                      ontSize="16"
                      variant="unstyled"
                    />
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pedro Amora</Text>
                    <Text fontSize="sm" color="gray.300">
                      pedro.amora@berrytech.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit User"
                      icon={<Icon as={RiPencilLine} />}
                      ontSize="16"
                      variant="unstyled"
                    />
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
