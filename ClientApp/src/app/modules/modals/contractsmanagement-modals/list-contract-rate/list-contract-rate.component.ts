import { Component, OnInit, Input } from '@angular/core';
import { Rate } from 'src/app/core/models/rate.model';
import { Employee } from 'src/app/core/models/employee.model';
import { RateService } from 'src/app/core/services/rate.service';
import { NbToastrService, NbDialogRef } from '@nebular/theme';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Component({
  selector: 'app-list-contract-rate',
  templateUrl: './list-contract-rate.component.html',
  styleUrls: ['./list-contract-rate.component.css']
})
export class ListContractRateComponent implements OnInit {
  rate: Rate[] = [];
  @Input() employee: Employee;
  user: UserPayload;
  
  constructor(
    private rateService: RateService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<ListContractRateComponent>,
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); // here we receive a payload
          // from the token and assigne it to our `user` variable
          // this.token = token;
        }

      });
   }

   settings = {};

  settingsAdmin = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: {
      add: false,
      edit: true,
      delete: true
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      contractName: {
        title: 'Contract Name',
        type: 'string',
      },
      value: {
        title: 'Value',
        type: 'string',
      },
    }
  }

  settingsTL = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: false,
    columns: {
      contractName: {
        title: 'Contract Name',
        type: 'string',
      },
      value: {
        title: 'Value',
        type: 'string',
      },
    }
  }

  ngOnInit() {
    if (this.user.rol == "TeamLeader") {
      this.settings = this.settingsTL;
    }
    else {
      this.settings = this.settingsAdmin;
    }
    this.rateService.getRatesByEmployeeId(this.employee.id).subscribe((data) => {
      this.rate = data;
    });

  }
  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.rateService.destroy(event.data.id).
        subscribe(data => this.showToast('Rate deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.rateService.update(event.newData).
        subscribe(data => this.showToast('Rate updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  dismiss() {
    this.ref.close();
  }

}
