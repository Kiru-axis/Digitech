import { Component, input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { ControlValueAccessorDirective } from '../directives/control-value-accessor.directive';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  imports: [ReactiveFormsModule, NgStyle],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: TextAreaComponent, multi: true },
  ],
})
export class TextAreaComponent<T> extends ControlValueAccessorDirective<T> {
  placeholder = input<string>();

  label = input.required<string>();

  id = input.required<string>();

  labelColor = input<string>();
}
