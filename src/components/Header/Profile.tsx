import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Vilela</Text>
          <Text color="gray.300" fontSize="small">
            guirvilela@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Guilherme Vilela"
        src="https://avatars.githubusercontent.com/u/47677457?v=4"
      />
    </Flex>
  );
}
