import { AbstractControl } from '@angular/forms';

export abstract class Basevalidation {
    ErrorMessage: string;
    IsValidationEnabled: boolean;
    ValidationId: string;
    constructor(validationId: string, errorMessage: string, isValidationEnabled: boolean) {
        this.ErrorMessage = errorMessage;
        this.IsValidationEnabled = isValidationEnabled;
        this.ValidationId = validationId;
    }
    abstract isValid(control: AbstractControl): boolean;
}
