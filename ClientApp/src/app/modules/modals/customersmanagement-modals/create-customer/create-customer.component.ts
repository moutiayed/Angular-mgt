import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer.model';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})


export class CreateCustomerComponent implements OnInit {
  customer = new Customer();
  constructor(
    protected ref: NbDialogRef<CreateCustomerComponent>,
    private customerService: CustomerService) { }

  ngOnInit() {
  }

  create() {
    this.customerService.create(this.customer).
      subscribe(customer => {
        this.ref.close(customer);
      });
  }

  dismiss() {
    this.ref.close();
  }

}
