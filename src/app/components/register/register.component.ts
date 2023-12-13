import { Component, OnInit } from '@angular/core';
import { Registration } from './models/register.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as EmployeeRegistrationActions from './actions/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  employeeInfo!: Registration;
  regForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.regForm = this.fb.group({
      companyName: [''],
      industry: [''],
      companySize: [''],
      companyType: [''],
    });
  }

  onRegister() {
   const formValues = this.regForm.value
    this.employeeInfo = {
      companyName: formValues.companyName,
      industry: formValues.industry,
      companySize: formValues.companySize,
      companyType: formValues.companyType
    }
    this.store.dispatch(EmployeeRegistrationActions.registerEmployee({ employeeInfo: this.employeeInfo }));

  }
}
