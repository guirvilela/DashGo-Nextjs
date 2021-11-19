import {
  Box,
  Button,
  Checkbox,
  Icon,
  Tbody,
  Td,
  Tr,
  Text,
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

interface TableUsersProps {
  name: string;
  email: string;
  date: string;
  isWideVersion: boolean;
  showTitles?: boolean;
}

export default function TableUsers({
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
            <Text fontWeight="bold">{name}</Text>
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
