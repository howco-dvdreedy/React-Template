import {
   Card,
   Heading,
   CardHeader,
   CardFooter,
   CardBody,
   Stat,
   StatLabel,
   StatNumber,
   Badge,
   Center,
   Text
} from '@chakra-ui/react';

type WorkItemProps = {
   resource: string;
};

export const WorkItem = ({ resource}: WorkItemProps) => {
   return (
      <Card>
         <CardHeader>
            <Center>
               <Heading size="sm"><Text> Process</Text></Heading>
            </Center>
         </CardHeader>
         <CardBody>
            <Center>
               <Badge colorScheme="cyan" variant="solid">
                  {resource}
               </Badge>
            </Center>
         </CardBody>
         <CardFooter>
            <Center>
               <Stat>
                  <StatLabel>Total Time</StatLabel>
                  <StatNumber>12:00 Hrs</StatNumber>
               </Stat>
            </Center>
         </CardFooter>
      </Card>
   );
};
