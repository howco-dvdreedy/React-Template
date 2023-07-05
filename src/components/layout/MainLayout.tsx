import { Center } from '@chakra-ui/react';
import SideNav from './SideNav';
import * as React from 'react';
import AppBar  from './AppBar';

type MainLayoutProps = {
   children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
   return (
      <>
      <AppBar></AppBar>
         <SideNav>                                                                                                                                                                                                                                                                                                                                                 
            <Center>{children}</Center>
         </SideNav>
      </>
   );
};
