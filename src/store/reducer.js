import { combineReducers } from '@reduxjs/toolkit';

import assignedParents from '../features/childApp/assignedParents/assignedParentsSlice';
import assignedChildren from '../features/parentApp/assignedChildren/assignedChildrenSlice';

const rootReducer = combineReducers({
  assignedParents,
  assignedChildren,
});

export default rootReducer;
