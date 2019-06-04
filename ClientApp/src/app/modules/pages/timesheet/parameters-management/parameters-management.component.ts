import { Component, OnInit } from '@angular/core';
import { ParameterService } from 'src/app/core/services/parameter.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Parameter } from 'src/app/core/models/parameter.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-parameters-management',
  templateUrl: './parameters-management.component.html',
  styleUrls: ['./parameters-management.component.css']
})
export class ParametersManagementComponent implements OnInit {
  submittedV = false;
  submittedG = false;
 source: LocalDataSource;
  groups:string[];
  newValue;
  newGroup;
  group;
  showhide=false;
  parameter=new Parameter();

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
      group: {
        title: 'Groupe',
        type: 'string',
      },
      value: {
        title: 'Value',
        type: 'string',
      },
    },
  };

  constructor(private parameterservice:ParameterService,
    private toastrService:NbToastrService) { }

  ngOnInit() {
    this.parameterservice.getAll().subscribe((data) => {
      this.source = new LocalDataSource(data);
    });
    this.parameterservice.getGroup().subscribe((data)=>{
      this.groups=data;
      this.groups.push("Add a new Group...");
      })
    }
  addGroup(){
     this.parameter.Group=this.newGroup;
     this.parameter.Value=this.newValue;
     this.parameterservice.create(this.parameter).
     subscribe((data)=>
     {
       this.source.prepend(data)
       this.showhide=!this.showhide;
       this.parameterservice.getGroup().subscribe((data)=>{
        this.groups=data;
        this.groups.push("Add a new Group...");
        })
      });
    }
  addValue()
  {
    this.parameter.Group=this.group;
    this.parameter.Value=this.newValue;
    this.parameterservice.create(this.parameter).
     subscribe((data)=>
     {
       this.source.prepend(data)
      });
  }
  onChange(selectedGroup){
    if (selectedGroup==="Add a new Group...")
    this.showhide=!(this.showhide);
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.parameterservice.destroy(event.data.id).
        subscribe(()=> this.showToast('Parameter deleted successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update?')) {
      this.parameterservice.update(event.newData).
      subscribe(() => this.showToast('Parameter updated successfully', 'Success'));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  showToast(status, message) {
    this.toastrService.success(status, message, { status, });
  }
}
