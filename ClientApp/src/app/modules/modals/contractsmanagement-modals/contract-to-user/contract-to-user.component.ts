import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { ContractService } from 'src/app/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Rate } from 'src/app/core/models/rate.model';
import { Guid } from 'guid-typescript';
import { RateService } from 'src/app/core/services/rate.service';

@Component({
  selector: 'app-contract-to-user',
  templateUrl: './contract-to-user.component.html',
  styleUrls: ['./contract-to-user.component.css']
})
export class ContractToUserComponent implements OnInit {

  contracts: any[];
  rate = new Rate();
  idcontract;
  @Input() employee: Employee;
  constructor(
    private contractService: ContractService,
    private rateService: RateService,
    protected ref: NbDialogRef<ContractToUserComponent>,
     private toastrService: NbToastrService,
  ) { }
  create() {
    this.rate.userId=<any>this.employee.id;
    this.rate.contractId=this.idcontract;
    this.rateService.create(this.rate).
      subscribe(()=> {
        this.showToast('Contract added successfully', 'Success')
        this.ref.close();
      });
      
  }

  ngOnInit() {
    this.contractService.getAll()
      .subscribe(data => this.contracts = data);
  }

showToast(status, message) {
  this.toastrService.success(status, message, { status, });
}

dismiss() {
  this.ref.close();
}


}
