import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Release } from 'src/app/core/models/release.model';
import { ReleaseService } from 'src/app/core/services/release.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from "moment";

@Component({
  selector: 'app-create-release',
  templateUrl: './create-release.component.html',
  styleUrls: ['./create-release.component.css']
})
export class CreateReleaseComponent implements OnInit {
  release = new Release();
  startDateR = new Date();
  releaseDateR = new Date();
  releaseForm: FormGroup;
  submitted = false;

  constructor(
    protected ref: NbDialogRef<CreateReleaseComponent>,
    private releaseService: ReleaseService,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.releaseForm= this.formBuilder.group({
      startDate:['',this.DateValidator()],
      releaseDate:['',this.DateValidator()],
      Description:['',Validators.required],
    });
  }
  get f() { return this.releaseForm.controls; }

  create() {
    this.submitted = true;
    if (this.releaseForm.invalid) {
      return;
  }
  console.log(this.startDateR)

  this.release.startDate = this.startDateR.toDateString();
  this.release.releaseDate = this.releaseDateR.toDateString();
  this.releaseService.create(this.release).
    subscribe(release => {
      this.ref.close(release);
    });
  }

  dismiss() {
    this.ref.close();
  }
  DateValidator(format = "dd/MM/YYYY"): any {
    return (control: FormControl): { [key: string]: any } => {
      const val = moment(control.value, format, true);
  
      if (!val.isValid()) {
        return { invalidDate: true };
      }
  
      return null;
    };
  }

}
