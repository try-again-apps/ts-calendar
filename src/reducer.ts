import { combineReducers } from 'redux';

import { IApplicationState } from './types';

import { categoryDialog, categories } from './components/model';

const rootReducer = combineReducers<IApplicationState>({
  categoryDialog,
  categories
});

export default rootReducer; 