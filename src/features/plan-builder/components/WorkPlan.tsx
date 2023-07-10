import { SortableItem } from '@/features/drag-and-drop/sortableItem';
import { WorkItem } from './WorkItem';

import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import {
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Grid,
   Text,
   Flex,
   Button,
   Spacer,
   Divider,
   Stat,
   StatHelpText,
   StatNumber,
} from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

type WorkPlanProps = {
   resources: string[];
};

export const WorkPlan = ({ resources }: WorkPlanProps) => {
   const { setNodeRef } = useDroppable({ id: 'work-plan' });

   return (
      <SortableContext items={resources} strategy={rectSortingStrategy}>
         <Card h='60%' m={1}  ref={setNodeRef}>
            <CardHeader >
               <Flex>
                  <Stat>
                     <StatNumber>Work Plan</StatNumber>
                     <StatHelpText>(Click a resource to Open Editor)</StatHelpText>
                  </Stat>
                  <Spacer />
                  <Button>Send to Shop</Button>
               </Flex>
            </CardHeader>
            <Divider />
            <CardBody backgroundColor={'gray'}>
               <Grid templateColumns="repeat(6, 1fr)" gap={5} >
                  {resources.map((resource) => (
                     <SortableItem key={resource} id={resource}>
                        <WorkItem resource={resource} />
                     </SortableItem>
                  ))}
               </Grid>
            </CardBody>
            <Divider />
            <CardFooter></CardFooter>
         </Card>
      </SortableContext>
   );
};
