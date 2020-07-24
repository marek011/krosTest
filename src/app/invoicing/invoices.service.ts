import { Injectable } from '@angular/core';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  constructor() { }

  generateInvoice(): Invoice {
    return {
      name: this.generateName(),
      price: this.generatePrice()
    };
  }

  generateInvoices(count: number): Invoice[] {
    const invoices = [];
    for (let invoiceInd = 0; invoiceInd < count; invoiceInd++) {
      invoices.push(this.generateInvoice());
    }
    return invoices;
  }

  generatePrice(decimalPlaces: number = 1): number {
    return Math.round(Math.random() * (10 ** decimalPlaces)) / (10 ** decimalPlaces);
  }

  generateName(length: number = 8) {
    let name = '';
    for (let i = 0; i < length; i++) {
      name += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }
    return name;
  }
}
