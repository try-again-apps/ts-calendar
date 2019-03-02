import { ICategoryState, ICategoryDialogState } from './components/types';

export interface IApplicationState {
  categoryDialog: ICategoryDialogState,
  categories: ICategoryState
}
