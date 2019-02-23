import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Basecomponent } from '../corelib';
import { Basevalidation } from './validations/basevalidation';
import { Validator } from './validator';

export abstract class ValidatableBasecomponent extends Basecomponent implements OnInit {
    Validator: Validator;
    FormGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private validationMap: Map<string, Basevalidation[]>) {
        super();
        this.Validator = new Validator(validationMap);
    }

    ngOnInit() {
        super.ngOnInit();

        const group = {};
        this.validationMap.forEach((validations: Basevalidation[], formcontrolName: string) =>
            group[formcontrolName] = [formcontrolName, this.Validator.validations(formcontrolName)]
        );

        this.FormGroup = this.formBuilder.group(group);
        this.Validator.FormGroup = this.FormGroup;
    }

    getErrorMessage(formcontrolName: string) {
        const control = this.FormGroup.get(formcontrolName);
        if (control && control.errors) {
            return control.errors[Object.keys(control.errors)[0]];
        } else { return null; }
    }
}
