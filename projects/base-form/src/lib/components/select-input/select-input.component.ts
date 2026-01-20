import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { OptionTypeEnum } from '../../core/enums/option-type.enum';
import { of } from 'rxjs';

const VALUE_ACCESSOR_PROVIDER = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }

@Component({
  selector: 'base-form-select-input',
  imports: [SelectModule, FormsModule, CommonModule],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
  providers: [VALUE_ACCESSOR_PROVIDER],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInputComponent implements ControlValueAccessor{
   label = input();
   options = input();
   optionLabel = input('label');
   optionValue = input('value');
   normalizeValue = input<Function>()
   placeholder = input('');
   onChangeEmit = output<any>()
   required = input()
   optionType = input<OptionTypeEnum>(OptionTypeEnum.EAGER)
  //  asyncOptionType = input<AsyncOptionEnum>()

   loading = false;

  //  private _asyncOptionService = inject(AsyncOptionsService)
  //  private _messageService = inject(ToastService)
   private _options: any[] = [];

  asyncOptionsPipe$ = computed(() => of([]))

   value: any;
   disabled = false;

  // Callbacks
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleChange(event: any) {
    this.value = event.value;
    const _normalizeValueFc = this.normalizeValue()

    if(_normalizeValueFc instanceof Function) {
      const normalizedValue = _normalizeValueFc(this.value)
      this.onChange(normalizedValue);
      this.onChangeEmit.emit(normalizedValue)
    } else {
      this.onChange(this.value)
      this.onChangeEmit.emit(this.value)
    }

    this.onTouched();
  }
}
