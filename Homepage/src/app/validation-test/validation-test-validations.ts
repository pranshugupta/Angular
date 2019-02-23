import { RequiredValidation, LeadingTrailingSpacesValidation } from '../core/validationlib';

// tslint:disable-next-line:no-namespace
export namespace ValidationTestValidations {
    export const FIRST_NAME = 'firstName';
    export const LAST_NAME = 'lastName';
    export const ValidationMap = new Map([
        [FIRST_NAME, [
            new RequiredValidation('Req'),
            new LeadingTrailingSpacesValidation('LeadTrail')
        ]],
        [LAST_NAME, [
            new RequiredValidation('Req'),
            new LeadingTrailingSpacesValidation('LeadTrail')
        ]]
    ]);
}
