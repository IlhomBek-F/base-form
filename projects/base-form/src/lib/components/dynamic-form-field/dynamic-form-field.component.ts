import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from "../text-input/text-input.component";
import { SelectInputComponent } from "../select-input/select-input.component";
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { NumberInputComponent } from '../text-input-number/number-input.component';
import { QuestionFieldTypeEnum, QuestionTypeEnum } from '../../core/enums/question-type.enum';
import { TimePickerComponent } from '../time-picker/time-picker.component';
import { TextareaInputComponent } from '../textarea-input/textarea-input.component';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { QuestionBaseType } from '../../core/models/question-base';
import { OptionTypeEnum } from '../../core/enums/option-type.enum';

@Component({
  selector: 'base-form-dynamic-form-field',
  imports: [
    TextInputComponent,
    ReactiveFormsModule,
    NumberInputComponent,
    DatepickerComponent,
    TimePickerComponent,
    SelectInputComponent,
    TextareaInputComponent,
    MultiSelectComponent,
    PasswordInputComponent
  ],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormFieldComponent {
  readonly question = input.required<QuestionBaseType>();
  readonly form = input.required<FormGroup>();
  readonly QuestionTypeEnum = QuestionTypeEnum;
  readonly QuestionFieldTypeEnum = QuestionFieldTypeEnum
  readonly OptionTypeEnum = OptionTypeEnum

  get isValid() {
    return this.form().controls[this.question().key].valid;
  }
}
