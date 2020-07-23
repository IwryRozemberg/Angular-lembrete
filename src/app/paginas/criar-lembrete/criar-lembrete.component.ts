import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LembreteService } from './../../services/lembrete.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private router: Router) { }

  public addLembrete(lembrete: Lembrete): void {
    this.lembreteService.addLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        (err) => { this.errorMsgComponent.setErrorMessage(`Falha ao adicionar lembrete.}`); }
      );
  }
}
