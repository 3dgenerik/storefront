import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class QuantityService {
    private quantitySubject = new BehaviorSubject<number>(1);
    quantity$ = this.quantitySubject.asObservable();

    updateQuantity(quantity: number): void {
        this.quantitySubject.next(quantity);
    }
}
