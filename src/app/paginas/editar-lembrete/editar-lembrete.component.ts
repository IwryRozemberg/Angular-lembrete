import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Lembrete } from './../../interfaces/lembrete';
import { LembreteService } from './../../services/lembrete.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {
  public lembrete: Lembrete;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService,
              private router: Router,
              private actviteRoute: ActivatedRoute) {
    this.getLembrete(this.actviteRoute.snapshot.params.id);
  }

  public getLembrete(id: number): void {
    this.lembreteService.getLembreteById(id)
      .subscribe(
        (lembrete: Lembrete) => { this.lembrete = lembrete; },
        (err) => { this.errorMsgComponent.setErrorMessage(`Falha ao buscar lembrete.`); }
      );
  }

  public atualizarLembrete(lembrete: Lembrete): void {
    this.lembreteService.updateLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        (err) => { this.errorMsgComponent.setErrorMessage(`Falha ao buscar lembrete.`); }
      );
  }
}
