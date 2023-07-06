import { useAppDispatch } from '@/hooks/hooks';
import { setTitle } from '@/stores/slices/titleSlice';
import { ResouceSelection } from '../components/ResourceSelection';
import { SortableItem } from '@/features/drag-and-drop/sortableItems';
import { WorkItem } from '../components/WorkItem';

import {
   DndContext,
   DragEndEvent,
   DragOverlay,
   closestCenter,
   DragStartEvent,
   DragOverEvent
} from '@dnd-kit/core';
import { arrayMove, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Droppable } from '@/features/drag-and-drop/droppable';

export default function PlanBuilder() {
   // to do refactor simple string implementation to object with id
   const dispatch = useAppDispatch();
   const [resources, setResources] = useState<string[]>(['saw', 'bore', 'drift']);
   const [activeItem, setActiveItem] = useState<string | null>(null);

   const handleDragEnd = ({ active, over }: DragEndEvent) => {
      if (!over) {
         setActiveItem(null);
        //  setActiveItemOrigin(null);
         return;
      }

    //   if (over.id === 'trash') {
    //      if (palletteItems.find((item) => item.id === active.id)) {
    //         setPalletteItems(palletteItems.filter((item) => item.id !== active.id));
    //      }
    //   } else if (over.id === 'current') {
    //      getItem(active.id)?.color && setPickerColor(getItem(active.id)?.color);
    //   } else if (over.id === 'favorite') {
    //      getItem(active.id)?.color && setFavoriteColor(getItem(active.id)?.color);
    //   }
      setActiveItem(null);
    //   setActiveItemOrigin(null);
   };

   const handleDragOver = ({active, over}: DragOverEvent) => {
    if (!over) {
        // if (activeItemOrigin === null) return;
        const indx = resources.findIndex((x) => x === active.id);
        if (indx === -1) return;
        // if added to the list but not actually dropped
        setResources(resources.filter((x) => x !== active.id));
        return;
      }
      const active_indx = resources.findIndex((x) => x === active.id);
      const over_indx = resources.findIndex((x) => x === over.id);

      if (active_indx !== -1 && over_indx !== -1) {
  
        if (active_indx === over_indx) return;
        setResources(arrayMove(resources, active_indx, over_indx));
      } else if (over.id === "pallette") {
        // if (palletteItems.findIndex((x) => x.id === active.id) === -1) {
        // console.log(active_indx, over_indx, "favorite");
        //   if (active.id === favoriteId) {
        //     setPalletteItems([
        //       ...palletteItems,
        //       { id: favoriteId, color: favoriteColor },
        //     ]);
        //     setFavoriteId(id_gen);
        //   } else if (active.id === pickerId) {
        //           console.log(active_indx, over_indx, "picker");
  
        //     setPalletteItems([
        //       ...palletteItems,
        //       { id: pickerId, color: pickerColor },
        //     ]);
        //     setPickerId(id_gen);
        //   }
        // }
      }
   }

   const handleDragCancel = () => {
      setActiveItem(null);
   };

   const handleDragStart = ({ active }: DragStartEvent) => {
      setActiveItem(active.id.toString());
   };

   dispatch(setTitle('Plan Builder POC'));
   return (
      <Flex w="100%">
         <DndContext
            onDragCancel={handleDragCancel}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
         >
            <ResouceSelection />
            <SortableContext items={resources} strategy={horizontalListSortingStrategy}>
               {resources.map((resource) => (
                  <SortableItem key={resource} id={resource}>
                     <WorkItem resource={resource} />
                  </SortableItem>
               ))}
            </SortableContext>
            <DragOverlay>{activeItem ? <WorkItem resource={activeItem} /> : null}</DragOverlay>
         </DndContext>
      </Flex>
   );
}
