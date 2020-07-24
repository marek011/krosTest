import { Component, OnInit } from '@angular/core';
import { Invoice } from './invoice';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {

  filterText = '';
  invoices: Invoice[];
  filteredInvoices: Invoice[];

  paidCount: number;
  get unpaidCount(): number {
    return this.filteredInvoices.length - this.paidCount;
  }

  private initNumberOfInvoices = 100;

  constructor(private invoicesService: InvoicesService) {
    this.invoices = this.invoicesService.generateInvoices(this.initNumberOfInvoices);
    this.updateFilteredInvoices();
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
    this.updateFilteredInvoices();
    this.updatePaidCount();
  }

  filterTextChanged(filterText: string) {
    this.filterText = filterText;
    this.updateFilteredInvoices();
    this.updatePaidCount();
  }

  private updateFilteredInvoices() {
    this.filteredInvoices = this.invoices.filter(invoice => invoice.name.indexOf(this.filterText) > -1);
  }

  private updatePaidCount() {
    this.paidCount = 0;
    for (const invoice of this.filteredInvoices) {
      if (this.isPaid(invoice)) {
        this.paidCount++;
      }
    }
  }
}
