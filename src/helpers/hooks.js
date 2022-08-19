import {TypedUseSelectorHook, useDispatch, useSelector, useStore} from 'react-redux';
import {AppDispatch, RootState} from 'project-types';
import store from '../store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => typeof store = useStore;
