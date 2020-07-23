import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Lembrete } from './../interfaces/lembrete';


@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  private _lembretes: BehaviorSubject<Lembrete[]>;
  public readonly lembretes$: Observable<Lembrete[]>;

  constructor(private http: HttpClient) {
    this._lembretes = new BehaviorSubject([]);
    this.lembretes$ = this._lembretes.asObservable();
  }

  public atualizarLembretes(): Observable<Lembrete[]>{
    return this.getListaLembretes()
      .pipe(
        tap((lembretes: Lembrete[]) => {
          this._lembretes.next(lembretes);
        })
      );
  }

  private getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.apiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembreteById(id: number): Observable<Lembrete> {
    const url = `${environment.apiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete>  {
    const url = `${environment.apiUrl}/lembrete`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  updateLembrete(lembrete: Lembrete): Observable<Lembrete>  {
    const url = `${environment.apiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deleteLembreteById(id: number): Observable<Lembrete> {
    const url = `${environment.apiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

}
