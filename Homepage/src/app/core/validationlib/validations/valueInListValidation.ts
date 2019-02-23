import { AbstractControl } from '@angular/forms';
import { Basevalidation } from './basevalidation';

export class ValueInListValidation extends Basevalidation {
    constructor(
        validationId = '', errorMessage = 'Field value does not match with list', isValidationEnabled = true,
        private list: string[], private isInclude = true,
    ) {
        super(validationId, errorMessage, isValidationEnabled);
    }
    isValid(control: AbstractControl): boolean {
        const value = control.value ? control.value : '';
        if (value.length > 0) {
            return this.isInclude ? this.list.includes(value) : !this.list.includes(value);
        }
        return !this.isInclude;
    }
}
