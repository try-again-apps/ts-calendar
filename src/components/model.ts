import { Action, combineReducers, Reducer } from 'redux';

import { CategoryType, ICategoryState, ICategoryDialogState } from './types';

export enum ActionTypes {
  CATEGORY_DIALOG_OPEN = 'CATEGORY_DIALOG_OPEN',
  CATEGORY_DIALOG_CLOSE = 'CATEGORY_DIALOG_CLOSE',
  CATEGORY_ADD = 'CATEGORY_ADD',
  CATEGORY_REMOVE = 'CATEGORY_REMOVE'
}

interface IOpenCategoryDialogAction extends Action {
  type: ActionTypes.CATEGORY_DIALOG_OPEN;
  payload: string;
}

interface ICloseCategoryDialogAction extends Action {
  type: ActionTypes.CATEGORY_DIALOG_CLOSE;
}

export const openCategoryDialog = (date: string): IOpenCategoryDialogAction => ({
  type: ActionTypes.CATEGORY_DIALOG_OPEN,
  payload: date
})

export const closeCategoryDialog = (): ICloseCategoryDialogAction => ({
  type: ActionTypes.CATEGORY_DIALOG_CLOSE
})

export type CategoryDialogAction =
 | IOpenCategoryDialogAction
 | ICloseCategoryDialogAction;

interface IAddCategoryAction extends Action {
  type: ActionTypes.CATEGORY_ADD,
  payload: { category: CategoryType, date: string }
}

interface IRemoveCategoryAction extends Action {
  type: ActionTypes.CATEGORY_REMOVE,
  payload: { date: string }
}

export type CategoryAction =
 | IAddCategoryAction
 | IRemoveCategoryAction;

// export const addCategory = data => createAction(ActionTypes.CATEGORY_ADD, data);
// export const removeCategory = data =>
//   createAction(ActionTypes.CATEGORY_REMOVE, data);

const active: Reducer<boolean, CategoryAction & CategoryDialogAction> = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.CATEGORY_DIALOG_OPEN:
      return true;
    case ActionTypes.CATEGORY_DIALOG_CLOSE:
    case ActionTypes.CATEGORY_ADD:
    case ActionTypes.CATEGORY_REMOVE:
      return false;
    default:
      return state;
  }
}

const selectedDate: Reducer<string, CategoryDialogAction> = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.CATEGORY_DIALOG_OPEN:
      return action.payload;
    case ActionTypes.CATEGORY_DIALOG_CLOSE:
      return '';
    default:
      return state;
  }
}

export const categoryDialog = combineReducers<ICategoryDialogState, CategoryDialogAction>({
  active,
  selectedDate
});

export const categories: Reducer<ICategoryState, CategoryAction> = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.CATEGORY_ADD: {
      const { category, date } = action.payload;
      return { ...state, [date]: category }
    }
    case ActionTypes.CATEGORY_REMOVE: {
      const { date } = action.payload;
      const { [date]: removed, ...rest } = state;
      return rest;
    }
    default:
      return state;
  }
}
