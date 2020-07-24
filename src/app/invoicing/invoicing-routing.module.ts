import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicingComponent } from './invoicing.component';

const routes: Routes = [{ path: '', component: InvoicingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicingRoutingModule { }
