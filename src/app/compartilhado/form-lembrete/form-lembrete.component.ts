import { Lembrete } from './../../interfaces/lembrete';
import { Component, Input, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent {
  @Input() lembrete: Lembrete = {} as Lembrete;
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter<Lembrete>();

  onSubmit(): void {
    this.outputLembrete.emit(this.lembrete);
  }
}
