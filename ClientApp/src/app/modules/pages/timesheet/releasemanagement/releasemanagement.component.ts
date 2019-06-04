import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { Release } from 'src/app/core/models/release.model';
import { ReleaseService } from 'src/app/core/services/release.service';
import { LocalDataSource } from 'ng2-smart-table';
import { CreateReleaseComponent } from 'src/app/modules/modals/releasemanagement-modals/create-release/create-release.component';
import { NbAccessChecker } from '@nebular/security';
import { UserPayload } from 'src/app/core/models/userPayload.model';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-releasemanagement',
  templateUrl: './releasemanagement.component.html',
  styleUrls: ['./releasemanagement.component.css']
})
export class ReleasemanagementComponent implements OnInit {
  releases: Release[] = [];
  source: LocalDataSource;
  user: UserPayload;
  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    private releaseService: ReleaseService,
    public accessChecker: NbAccessChecker,
    private authService: NbAuthService,
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
        edit: true,
        delete: true
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
        description: {
          title: 'Description',
          type: 'string',
        },
        startDate: {
          title: 'Start Date',
          type: 'string',
          valuePrepareFunction: (startDate) => { 
            var raw = new Date(startDate);
            var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
            return formatted;
          },
        },
        releaseDate: {
          title: 'Release Date',
          type: 'string',
          valuePrepareFunction: (releaseDate) => { 
            var raw = new Date(releaseDate);
            var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
            return formatted;
          },
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
        description: {
          title: 'Description',
          type: 'string',
        },
        startDate: {
          title: 'Start Date',
          type: 'string',
          valuePrepareFunction: (startDate) => { 
            var raw = new Date(startDate);
            var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
            return formatted;
          },
        },
        releaseDate: {
          title: 'Release Date',
          type: 'string',
          valuePrepareFunction: (releaseDate) => { 
            var raw = new Date(releaseDate);
            var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
            return formatted;
          },
        },
      },
    };

    ngOnInit() {
      if(this.user.rol=="User"){
        this.settings = this.settingsUser;
      }
      else{
        this.settings = this.settingsAdminTL;
      }
      this.refresh();
    }
    
    open() {
      this.dialogService.open(CreateReleaseComponent)
        .onClose.subscribe((data) => {
          if (data) { this.source.prepend(data); }
        });
    }
    showToast(status, message) {
      this.toastrService.success(status, message, { status, });
    }

    onDeleteConfirm(event): void {
      if(window.confirm('Are you sure you want to delete?')) {
      this.releaseService.destroy(event.data.id).
        subscribe(data => this.showToast('Release deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.releaseService.update(event.newData).
        subscribe(Data => this.showToast('Release updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  refresh() {
    this.releaseService.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
    });
  }

}
