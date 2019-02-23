import { Component, OnInit } from '@angular/core';
import { ValidatableBasecomponent } from '../core/validationlib';
import { FormBuilder } from '@angular/forms';
import { ValidationTestValidations } from './validation-test-validations';

@Component({
  selector: 'app-validation-test',
  templateUrl: './validation-test.component.html',
  styleUrls: ['./validation-test.component.scss']
})
export class ValidationTestComponent extends ValidatableBasecomponent implements OnInit {
  public firstName = '';
  public lastName = '';
  constructor(formBuilder: FormBuilder) {
    super(formBuilder, ValidationTestValidations.ValidationMap);
  }
  ngOnInit() {
    super.ngOnInit();
  }

  DisableFirstName() {
    this.Validator.DisableFormControl(ValidationTestValidations.FIRST_NAME);
  }
  DisableFirstNameValidation() {
    this.Validator.DisableFormControlValidation(ValidationTestValidations.FIRST_NAME);
  }
  DisableFormControl() {
    this.Validator.DisableForm();
  }
  DisableFormValidation() {
    this.Validator.DisableFormValidation();
  }

  EnableLTValidation() {
    this.Validator.EnableValidation(ValidationTestValidations.FIRST_NAME, ['LeadTrail']);
  }
  DisableLTValidation() {
    this.Validator.DisableValidation(ValidationTestValidations.FIRST_NAME, ['LeadTrail']);
  }
  Reset() {
    this.Validator.EnableForm();
  }
}
