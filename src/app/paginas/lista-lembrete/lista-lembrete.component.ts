import { Component, OnInit, ViewChild } from '@angular/core';

import { LembreteService } from '../../services/lembrete.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(public lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes();
  }

  public getListaLembretes(): void {
    this.lembreteService.atualizarLembretes()
      .subscribe(
        () => {},
        (err) => { this.errorMsgComponent.setErrorMessage(`Falha ao buscar lembretes:\n${err}`); }
      );
  }

  public deletarLembrete(id: number): void {
    this.lembreteService.deleteLembreteById(id)
      .subscribe(
        () => {
          this.getListaLembretes();
        },
        (err) => { this.errorMsgComponent.setErrorMessage(`Falha ao deletar lembrete:\n${err}`); }
      );
  }
}
