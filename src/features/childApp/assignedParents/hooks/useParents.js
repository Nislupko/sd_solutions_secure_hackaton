import { useAppDispatch, useAppSelector } from '../../../../helpers/hooks';
import { fetchParents } from '../fetchParents';

export function useParents() {
  const dispatch = useAppDispatch();
  return {
    parents: useAppSelector(({ assignedParents }) => assignedParents.parents),
    isLoading: useAppSelector(({ assignedParents }) => assignedParents.fetchParents.pending),
    loadParents: () => dispatch(fetchParents()),
    error: useAppSelector(({ assignedParents }) => assignedParents.fetchParents.error),
  };
}
