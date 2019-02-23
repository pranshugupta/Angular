import { AbstractControl } from '@angular/forms';
import { Basevalidation } from './basevalidation';

export class LeadingTrailingSpacesValidation extends Basevalidation {
    constructor(validationId = '', errorMessage = 'Field cannot have leading/trailing spaces', isValidationEnabled = true) {
        super(validationId, errorMessage, isValidationEnabled);
    }
    isValid(control: AbstractControl): boolean {
        const value = control.value ? control.value : '';
        if (value.length > 0) {
            return (value.charAt(0) === ' ' || value.charAt(control.value.length - 1) === ' ') ? false : true;
        }
        return true;
    }
}
