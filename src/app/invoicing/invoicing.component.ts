import { Component, OnInit } from '@angular/core';
import { Invoice } from './invoice';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {

  invoices: Invoice[];
  paidCount: number;
  get unpaidCount(): number {
    return this.invoices.length - this.paidCount;
  }

  private initNumberOfInvoices = 8;

  constructor(private invoicesService: InvoicesService) {
    this.invoices = this.invoicesService.generateInvoices(this.initNumberOfInvoices);
    this.updatePaidCount();
  }

  ngOnInit(): void {
  }

  isPaid(invoice: Invoice): boolean {
    return invoice.price >= 0.5;
  }

  addInvoice(name: string) {
    this.invoices = [
      {
        name,
        price: this.invoicesService.generatePrice()
      },
      ...this.invoices
    ];
    this.updatePaidCount();
  }

  private updatePaidCount() {
    this.paidCount = 0;
    for (const invoice of this.invoices) {
      if (this.isPaid(invoice)) {
        this.paidCount++;
      }
    }
  }
}
