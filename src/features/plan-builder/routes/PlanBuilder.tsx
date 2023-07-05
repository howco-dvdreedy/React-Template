import { useAppDispatch } from '@/hooks/hooks';
import { setTitle } from '@/stores/slices/titleSlice';
import { ResouceSelection } from '../components/ResourceSelection';

import { Box, Flex } from '@chakra-ui/react';

export default function PlanBuilder() {
   const dispatch = useAppDispatch();
   dispatch(setTitle('Plan Builder POC'));
   return (
      <Flex w="100%">
         <ResouceSelection />
         <Box w="60%">dnd</Box>
      </Flex>
   );
}
