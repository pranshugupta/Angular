import { AbstractControl } from '@angular/forms';
import { Basevalidation } from './basevalidation';

export class RegExpValidation extends Basevalidation {
    regex: RegExp;
    constructor(
        validationId = '', errorMessage = 'Field value does not match with regex', isValidationEnabled = true,
        pattern: '', ignoreCase = false, private isMatch = true,
    ) {
        super(validationId, errorMessage, isValidationEnabled);
        this.regex = ignoreCase ? new RegExp(pattern, 'i') : new RegExp(pattern);
    }
    isValid(control: AbstractControl): boolean {
        const value = control.value ? control.value : '';
        if (value.length > 0) {
            return this.isMatch ? this.regex.test(value) : !this.regex.test(value);
        }
        return !this.isMatch;
    }
}
