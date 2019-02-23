import { AbstractControl } from '@angular/forms';
import { Basevalidation } from './basevalidation';

export class RequiredValidation extends Basevalidation {
    constructor(validationId = '', errorMessage = 'Field is required', isValidationEnabled = true) {
        super(validationId, errorMessage, isValidationEnabled);
    }
    isValid(control: AbstractControl): boolean {
        const valueLength = control.value ? control.value.trim().length : 0;
        return valueLength > 0;
    }
}
