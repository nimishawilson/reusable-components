
import { createReducer, on } from '@ngrx/store';
import * as EmployeeRegisterActions from '../actions/register.actions';
import { Registration } from '../models/register.model';

export interface EmployeeRegistrationState {
  employeeInfo: Registration; // Define your state structure
}

export const initialEmployeeRegistrationState: EmployeeRegistrationState = {
  employeeInfo: {
    companyName: '',
    industry: '',
    companySize: '',
    companyType: '',
  },
};

export const employeeRegistrationReducer = createReducer(
  initialEmployeeRegistrationState,
  on(EmployeeRegisterActions.registerEmployee, (state, { employeeInfo }) => {
    console.log('-----reducer------', employeeInfo)
    console.log(state)
    return {
      ...state,
      employeeInfo,
    };
  })
);
