import { useAppDispatch, useAppSelector } from '../../../../helpers/hooks';
import { fetchChildren } from '../fetchChildren';

export function useChildren() {
  const dispatch = useAppDispatch();
  return {
    children: useAppSelector(({ assignedChildren }) => assignedChildren.children),
    isLoading: useAppSelector(({ assignedChildren }) => assignedChildren.fetchChildren.pending),
    loadChildren: () => dispatch(fetchChildren()),
    error: useAppSelector(({ assignedChildren }) => assignedChildren.fetchChildren.error),
  };
}
