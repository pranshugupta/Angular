import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationTestComponent } from './validation-test.component';
import { MatTooltipModule } from '@angular/material';
@NgModule({
  declarations: [
    ValidationTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'validation', component: ValidationTestComponent }
    ]),

    BrowserAnimationsModule,
    MatTooltipModule,
  ]
})
export class ValidationTestModule { }
