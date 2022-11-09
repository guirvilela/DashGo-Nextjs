import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';
import TableUsers from '../../components/TableUsers';
import { UserProps } from '../../services/mirage';
import { getUsers, useUsers } from '../../services/hooks/useUsers';
import { GetServerSideProps } from 'next';

export default function UserList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" width="8">
                      <Checkbox colorScheme="pink"></Checkbox>
                    </Th>

                    <Th> Usuário </Th>
                    {isWideVersion && <Th> Data de cadastro </Th>}
                    <Th width="8"> </Th>
                  </Tr>
                </Thead>

                {data.users.map(({ name, email, createdAt, id }: UserProps) => (
                  <TableUsers
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    date={createdAt}
                    isWideVersion={isWideVersion}
                  />
                ))}
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
