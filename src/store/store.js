import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const configuredStore = configureStore({ reducer });

export default configuredStore;
