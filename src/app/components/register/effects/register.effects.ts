// employee-registration.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as EmployeeRegisterActions from '../actions/register.actions';

@Injectable()
export class EmployeeRegistrationEffects {
  registerEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeRegisterActions.registerEmployee),
      map((action) => {
        // Add your side effects or API calls here
        console.log('Employee registered:', action.employeeInfo);
        return action.employeeInfo;
      })
    )
  );

  constructor(private actions$: Actions) {}
}
