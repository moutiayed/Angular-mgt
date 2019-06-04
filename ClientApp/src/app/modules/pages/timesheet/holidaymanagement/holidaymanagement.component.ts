import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-holidaymanagement',
  templateUrl: './holidaymanagement.component.html',
  styleUrls: ['./holidaymanagement.component.css']
})
export class HolidaymanagementComponent implements OnInit {
  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) { }

  data = [
    {
      column1: 'Holiday-1',
      column2: '10-10-2010',
      column3: 'Houssem Hamila',
      column4: '',
      column5: '',
      column6: '15-10-2010',
      column7: '7',
      column8: 'User-1'
    },
    {
      column1: 'Holiday-2',
      column2: '10-10-2010',
      column3: 'Houssem Hamila',
      column4: '',
      column5: '',
      column6: '15-10-2010',
      column7: '7',
      column8: 'User-2'
    }
  ];

  settings = {
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
      column1: {
        title: 'Id',
        type: 'string',
      },
      column2: {
        title: 'Creation Date',
        type: 'string',
      },
      column3: {
        title: 'Created By',
        type: 'string',
      },
      column4: {
        title: 'Update Date',
        type: 'string',
      },
      column5: {
        title: 'updated By',
        type: 'string',
      },
      column6: {
        title: 'Date',
        type: 'string',
      },
      column7: {
        title: 'Duration',
        type: 'string',
      },
      column8: {
        title: 'User Id',
        type: 'string',
      },
      /*
      button: {
        title: 'Details',
        type: 'custom',
        renderComponent: ButtonListContractsRenderComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`);
          });
        }
      },
      */
    },
  };

  ngOnInit() {
  }

  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
