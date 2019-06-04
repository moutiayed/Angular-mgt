import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CreateRequirementComponent } from 'src/app/modules/modals/requirement-modals/create-requirement/create-requirement.component';
import { ButtonListTasksRenderComponent } from 'src/app/modules/renderers/button-list-tasks-render.component';
import { RequirementService, Requirement } from 'src/app/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAccessChecker } from '@nebular/security';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CustomServerDataSource } from 'src/app/core/services/serverDataSourceRequirement';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})

export class RequirementComponent implements OnInit {
  requirements: Requirement[] = [];
  user: UserPayload;
  source: CustomServerDataSource;

  constructor(
    private requirementService: RequirementService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private authService: NbAuthService,
    public accessChecker: NbAccessChecker,
    public http: HttpClient,
    private datePipe: DatePipe, //For Date format
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

  settings = {}
  settingsAdminTL = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: {
      add: false,
      delete: true,
      update: true,
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
      nom: {
        title: 'Nom',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      contractName: {
        title: 'Contract Name',
        type: 'string',
        editable:false,
      },
      releaseDescription: {
        title: 'Release',
        type: 'string',
        editable:false,
      },
      parentRequirementNom: {
        title: 'Parent Requirement',
        type: 'string',
        editable:false,
      },
      startDate: {
        title: 'Start date',
        type: 'string',
        valuePrepareFunction: (startDate) => {
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      closingDate: {
        title: 'Closing date',
        type: 'string',
        valuePrepareFunction: (closingDate) => {
          var raw = new Date(closingDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      button: {
        title: 'Details',
        type: 'custom',
        filter: false,
        renderComponent: ButtonListTasksRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`);
          });
        },
        editable:false,
      },
    },
  };

  settingsUser = {
    pager: {
      display: true,
      perPage: 10
    },
    hideSubHeader: false,
    actions: false,
    columns: {
      nom: {
        title: 'Nom',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      contractName: {
        title: 'Contract Name',
        type: 'string',
        editable:false,
      },
      releaseDescription: {
        title: 'Release',
        type: 'string',
        editable:false,
      },
      parentRequirementNom: {
        title: 'Parent Requirement',
        type: 'string',
        editable:false,
      },
      startDate: {
        title: 'Start date',
        type: 'string',
        valuePrepareFunction: (startDate) => {
          var raw = new Date(startDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      closingDate: {
        title: 'Closing date',
        type: 'string',
        valuePrepareFunction: (closingDate) => {
          var raw = new Date(closingDate);
          var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
          return formatted;
        },
      },
      button: {
        title: 'Details',
        type: 'custom',
        filter: false,
        renderComponent: ButtonListTasksRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`);
          });
        },
        editable:false,
      },
    },
  };

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.source = new CustomServerDataSource(this.http);

    if (this.user.rol == "User") {
      this.settings = this.settingsUser;
    }
    else {
      this.settings = this.settingsAdminTL;
    }
  }

  open() {
    this.dialogService.open(CreateRequirementComponent)
      .onClose.subscribe((data) => {
        if (data) {
          this.source.prepend(data);
          this.reload();
        }
      }
      );
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.requirementService.destroy(event.data.id).
        subscribe(data => this.showToast('Requirement deleted successfully', 'Success'));
        this.reload();
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.requirementService.update(event.newData).
        subscribe(data => {
          this.showToast('Requirement updated successfully', 'Success');
          this.reload();
        });
    } else {
      event.confirm.reject();
    }
  }

}
