import { Center, Grid, GridItem } from '@chakra-ui/react';
import SideNav from './SideNav';
import * as React from 'react';
import AppBar from './AppBar';

type MainLayoutProps = {
   children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
   return (
      <>
         <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'75px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h="100%"
            w='100%'
            gap="1"
         >
            <GridItem area={'header'}>
               <AppBar></AppBar>
            </GridItem>
            <GridItem area={'nav'}>
               <SideNav></SideNav>
            </GridItem>
            <GridItem area={'main'}>
               <Center backgroundColor={'gray.500'}>{children}</Center>
            </GridItem>
         </Grid>
      </>
   );
};
