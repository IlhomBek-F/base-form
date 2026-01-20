import { ValidatorFn } from "@angular/forms";
import { QuestionBase } from "../dynamic-form/question-base";
import { QuestionDatePicker } from "../dynamic-form/question-datepicker";
import { QuestionPasswordInput } from "../dynamic-form/question-password-input";
import { QuestionSelectInput } from "../dynamic-form/question-select-input";
import { QuestionTextInput } from "../dynamic-form/question-text-input";
import { QuestionTextArea } from "../dynamic-form/question-textarea";
import { QuestionTimePicker } from "../dynamic-form/question-time-picker";
import { QuestionFieldTypeEnum, QuestionTypeEnum } from ".././enums/question-type.enum";

export interface QuestionOptionsModel {
  value?: any;
  key: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: QuestionTypeEnum;
  type?: QuestionFieldTypeEnum;
  placeholder?: string;
  validators?: ValidatorFn[],
  nonNullable?: boolean
  onValueChange?: (value: any, questions?: QuestionBase[]) => void
}

export type QuestionBaseType = QuestionTimePicker | QuestionSelectInput | QuestionTextInput | QuestionDatePicker | QuestionTextArea | QuestionPasswordInput

export interface FormContainer {
  containers: QuestionBaseType[]
}
