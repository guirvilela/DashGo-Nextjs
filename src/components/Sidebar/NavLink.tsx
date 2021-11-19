import React from 'react';
import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import ActiveLink from '../ActiveLink';

interface NavLinkProps extends LinkProps {
  children: string;
  icon: IconType;
  href: string;
}

export default function NavLink({
  children,
  icon,
  href,
  ...rest
}: NavLinkProps) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
