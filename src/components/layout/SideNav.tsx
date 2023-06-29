import { ReactNode } from 'react';
import {
   Box,
   CloseButton,
   Flex,
   Icon,
   useColorModeValue,
   Link,
   Drawer,
   DrawerContent,
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
   { name: 'Shop Plan Builder', to: '/shop-plan-builder', icon: FiLayout },
   { name: 'Scheduler', to: '/scheduler', icon: FiCalendar },
   { name: 'Work Center', to: '/work-center', icon: LuHardHat },
];

export default function SideNav({ children }: { children: ReactNode }) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return (
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
         <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
         <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
         >
            <DrawerContent>
               <SidebarContent onClose={onClose} />
            </DrawerContent>
         </Drawer>
         <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
         </Box>
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
         w={{ base: 'full', md: 60 }}
         pos="fixed"
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
         <Flex
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
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                     color: 'white',
                  }}
                  as={icon}
               />
            )}
            {children}
         </Flex>
      </Link>
   );
};
