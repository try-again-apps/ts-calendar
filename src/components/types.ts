export interface ICategoryDialogState {
  readonly active: boolean;
  readonly selectedDate: string;
}

export interface ICategoryState {
  readonly [id: string]: string
}

export enum CategoryType {
  Holiday = 'Holiday',
  Birthday = 'Birthday',
  Busy = 'Busy',
  Anniversary = 'Anniversary',
  None = 'None'
}
