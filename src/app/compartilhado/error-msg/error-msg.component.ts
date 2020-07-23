import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent  {
  private _msgError: string;
  public defaultTimeOut = 5000;

  public setErrorMessage(error: string, timeout: number = this.defaultTimeOut): void {
    this.msgError = error;

    setTimeout(() => {
      this.msgError = null;
    }, timeout);
  }

  public get msgError(): string {
    return this._msgError;
  }

  public set msgError(value: string) {
    this._msgError = value;
  }

}
