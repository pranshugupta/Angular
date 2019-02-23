import { AbstractControl } from '@angular/forms';
import { Basevalidation } from './basevalidation';

export class LengthValidation extends Basevalidation {
    constructor(
        validationId = '', errorMessage = 'Should have min-max length', isValidationEnabled = true,
        private minLength = -1, private maxLength = -1) {
        super(validationId, errorMessage, isValidationEnabled);
    }
    isValid(control: AbstractControl): boolean {
        const valueLength = control.value ? control.value.length : 0;
        return this.minLength <= valueLength && valueLength <= this.maxLength;
    }
}
