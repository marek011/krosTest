import { Injectable } from '@angular/core';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor() { }

  generateInvoice(): Invoice {
    return {
      name: this.generateName(8),
      price: this.generatePrice(1)
    };
  }

  generatePrice(decimalPlaces: number): number {
    return Math.round(Math.random() * (10 ** decimalPlaces)) / (10 ** decimalPlaces);
  }

  generateName(length: number) {
    let name = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      name += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return name;
  }
}
