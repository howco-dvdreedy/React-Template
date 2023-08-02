import {
   Box,
   Icon,
   useColorModeValue,
   Link,
   Text,
   useDisclosure,
   BoxProps,
   FlexProps,
} from '@chakra-ui/react';

import { FiHome, FiCalendar, FiBookOpen, FiLayout } from 'react-icons/fi';
import { LuHardHat } from 'react-icons/lu';
import { IconType } from 'react-icons/lib/esm';

interface LinkItemProps {
   name: string;
   to: string;
   icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
   { name: 'Home', to: '/', icon: FiHome },
   { name: 'Sales Orders', to: '/sales-orders', icon: FiBookOpen },
   { name: 'Shop Plan Builder', to: '/plan-builder', icon: FiLayout },
   { name: 'Scheduler', to: '/scheduler', icon: FiCalendar },
   { name: 'Work Center', to: '/work-center', icon: LuHardHat },
];

export default function SideNav() {
   const { onClose } = useDisclosure();
   return (
      <Box h="100%" bg={useColorModeValue('gray.100', 'gray.900')}>
         <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      </Box>
   );
}

interface SidebarProps extends BoxProps {
   onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
   return (
      <Box
         bg={useColorModeValue('white', 'gray.900')}
         borderRight="1px"
         borderRightColor={useColorModeValue('gray.200', 'gray.700')}
         pos="relative"
         h="full"
         {...rest}
      >
         {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} path={link.to}>
               {link.name}
            </NavItem>
         ))}
      </Box>
   );
};

interface NavItemProps extends FlexProps {
   icon: IconType;
   path: string;
   children: string;
}
const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
   return (
      <Link href={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
         <Box
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
               bg: 'cyan.400',
               color: 'white',
            }}
            {...rest}
         >
            {icon && (
               <Icon
                  fontSize="16"
                  _groupHover={{
                     color: 'white',
                  }}
                  as={icon}
               />
            )}
            <Text fontSize="sm">{children}</Text>
         </Box>
      </Link>
   );
};
