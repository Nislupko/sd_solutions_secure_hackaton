import { useAppDispatch, useAppSelector } from '../../../../helpers/hooks';
import { fetchParents } from '../fetchParents';
import { setParents } from '../setParents';

export function useParents() {
  const dispatch = useAppDispatch();
  return {
    parents: useAppSelector(({ assignedParents }) => assignedParents.parents),
    isLoading: useAppSelector(({ assignedParents }) => assignedParents.fetchParents.pending),
    loadParents: () => dispatch(fetchParents()),
    setParent: (id) => dispatch(setParents(id)),
    error: useAppSelector(({ assignedParents }) => assignedParents.fetchParents.error),
  };
}
