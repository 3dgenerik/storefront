import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestartComponentService {
  private restartSubject = new Subject<void>();

  restarted$ = this.restartSubject.asObservable();

  restartUpdate(){
    this.restartSubject.next()
  }

  constructor() { }
}
