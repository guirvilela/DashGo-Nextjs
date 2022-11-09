import {
  Box,
  Button,
  Checkbox,
  Icon,
  Tbody,
  Td,
  Tr,
  Text,
  Link,
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';

interface TableUsersProps {
  id: number;
  name: string;
  email: string;
  date: string;
  isWideVersion: boolean;
  showTitles?: boolean;
}

async function handlePrefetchUser(id: number) {
  await queryClient.prefetchQuery(
    ['user', id],
    async () => {
      const response = await api.get(`users/${id}`);
      console.log(response.data);
    },
    {
      staleTime: 1000 * 60 * 10, //10 minutes
    },
  );
}

export default function TableUsers({
  id,
  name,
  email,
  date,
  isWideVersion,
}: TableUsersProps) {
  return (
    <Tbody>
      <Tr>
        <Td>
          <Checkbox colorScheme="pink"></Checkbox>
        </Td>

        <Td>
          <Box>
            <Link
              color="purple.400"
              onMouseEnter={() => handlePrefetchUser(id)}
            >
              <Text fontWeight="bold">{name}</Text>
            </Link>
            <Text fontSize="sm" color="gray.300">
              {email}
            </Text>
          </Box>
        </Td>

        {isWideVersion && <Td>{date}</Td>}

        {isWideVersion && (
          <Td>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="purple"
              leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
            >
              Editar
            </Button>
          </Td>
        )}
      </Tr>
    </Tbody>
  );
}
