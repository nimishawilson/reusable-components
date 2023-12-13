
import { createAction, props } from '@ngrx/store';

export const registerEmployee = createAction(
  '[Employee Registration] Register Employee',
  props<{ employeeInfo: any }>()
);
