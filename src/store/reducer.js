import {combineReducers} from '@reduxjs/toolkit';

import assignedParents from '../features/childApp/assignedParents/assignedParentsSlice';

const rootReducer = combineReducers({
  assignedParents,
});

export default rootReducer;
