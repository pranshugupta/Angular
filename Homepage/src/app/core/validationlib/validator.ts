import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Basevalidation } from './validations/basevalidation';

export class Validator {
    FormGroup: FormGroup;
    private ValidationMap: Map<string, Basevalidation[]>;
    constructor(validationMap: Map<string, Basevalidation[]>) {
        this.ValidationMap = validationMap;
    }

    validations(formcontrolName: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (this.ValidationMap.get(formcontrolName)) {
                for (const validation of this.ValidationMap.get(formcontrolName)) {
                    if (validation.IsValidationEnabled && !validation.isValid(control)) {
                        return { Error: validation.ErrorMessage };
                    }
                }
            }
            return null;
        };
    }
    EnableValidation(formcontrolName: string, validationIds: string[]) {
        this.ValidationMap.get(formcontrolName).forEach(validation => {
            if (validationIds.includes(validation.ValidationId)) {
                validation.IsValidationEnabled = true;
            }
        });
        const control: AbstractControl = this.FormGroup.get(formcontrolName);
        if (control) {
            control.updateValueAndValidity();
        }
    }

    DisableValidation(formcontrolName: string, validationIds: string[]) {
        this.ValidationMap.get(formcontrolName).forEach(validation => {
            if (validationIds.includes(validation.ValidationId)) {
                validation.IsValidationEnabled = false;
            }
        });

        const control: AbstractControl = this.FormGroup.get(formcontrolName);
        if (control) {
            control.updateValueAndValidity();
        }
    }

    EnableForm(areValidationEnabled = true) {
        Object.keys(this.FormGroup.controls).forEach(formcontrolName => this.EnableFormControl(formcontrolName, areValidationEnabled));
    }
    DisableForm() {
        Object.keys(this.FormGroup.controls).forEach(formcontrolName => this.DisableFormControl(formcontrolName));
    }

    EnableFormValidation() {
        Object.keys(this.FormGroup.controls).forEach(formcontrolName => this.EnableFormControlValidation(formcontrolName));
    }
    DisableFormValidation() {
        Object.keys(this.FormGroup.controls).forEach(formcontrolName => this.DisableFormControlValidation(formcontrolName));
    }

    EnableFormControl(formcontrolName: string, isValidationEnabled = true) {
        const control: AbstractControl = this.FormGroup.get(formcontrolName);
        if (control) {
            control.enable();
            if (isValidationEnabled) {
                this.EnableFormControlValidation(formcontrolName);
            }
        }
    }
    DisableFormControl(formcontrolName: string) {
        const control: AbstractControl = this.FormGroup.get(formcontrolName);
        if (control) {
            control.disable();
            this.DisableFormControlValidation(formcontrolName);
        }
    }

    EnableFormControlValidation(formcontrolName: string) {
        const control: AbstractControl = this.FormGroup.get(formcontrolName);
        if (control && control.enabled) {
            control.setValidators(this.validations(formcontrolName));
            control.updateValueAndValidity();
        }
    }
    DisableFormControlValidation(formcontrolName: string) {
        const control: AbstractControl = this.FormGroup.get(formcontrolName);
        if (control) {
            control.clearValidators();
            control.updateValueAndValidity();
        }
    }
}
