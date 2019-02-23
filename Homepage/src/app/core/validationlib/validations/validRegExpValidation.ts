import { AbstractControl } from '@angular/forms';
import { Basevalidation } from './basevalidation';

export class ValidRegExpValidation extends Basevalidation {
    constructor(validationId = '', errorMessage = 'Regular expression is not valid', isValidationEnabled = true) {
        super(validationId, errorMessage, isValidationEnabled);
    }
    isValid(control: AbstractControl): boolean {
        const value = control.value ? control.value : '';
        if (value.length > 0) {
            try {
                const regex = new RegExp(value);
                return true;
            } catch (exception) {
                return false;
            }
        }
        return true;
    }
}
