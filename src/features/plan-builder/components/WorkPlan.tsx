import { SortableItem } from '@/features/drag-and-drop/sortableItem';
import { WorkItem } from './WorkItem';

import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { Grid, List } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

type WorkPlanProps = {
   resources: string[];
};

export const WorkPlan = ({ resources }: WorkPlanProps) => {
   const { setNodeRef } = useDroppable({ id: 'work-plan' });

   return (
      <SortableContext items={resources} strategy={rectSortingStrategy}>
         <Grid templateColumns="repeat(6, 1fr)" gap={5} ref={setNodeRef}>
            {resources.map((resource) => (
               <SortableItem key={resource} id={resource}>
                  <WorkItem resource={resource} />
               </SortableItem>
            ))}
         </Grid>
      </SortableContext>
   );
};
