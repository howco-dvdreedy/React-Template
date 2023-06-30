import { useAppDispatch } from "@/hooks/hooks";
import { setTitle } from "@/stores/slices/titleSlice";

export default function PlanBuilder() {
    const dispatch = useAppDispatch();
    dispatch(setTitle("PlanBuilder"));
    return <div>Plan Builder</div>
}