import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from '../orders/orders.component';



@NgModule({
  imports:      [ CommonModule ],
 declarations: [ OrdersComponent ],
 exports:      [ OrdersComponent, CommonModule, FormsModule ]
})
export class SharedModule { }
