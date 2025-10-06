import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import {type appDispatch,type RootState } from "./store";

type DispatchFunction = () => appDispatch;

export const useCartDispatch: DispatchFunction = useDispatch; // You dont need to recreate them in every slice
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
