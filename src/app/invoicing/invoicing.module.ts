import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicingRoutingModule } from './invoicing-routing.module';
import { InvoicingComponent } from './invoicing.component';


@NgModule({
  declarations: [InvoicingComponent],
  imports: [
    CommonModule,
    InvoicingRoutingModule
  ]
})
export class InvoicingModule { }
