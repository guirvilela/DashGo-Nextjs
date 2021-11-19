import React from 'react';
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import Profile from './Profile';
import NavigationNav from './NotificationNav';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export default function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          fontSize="24"
          variante="unstyled"
          onClick={onOpen}
          mr="2"
          bg="gray.900"
          icon={<Icon as={RiMenuLine} />}
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NavigationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
