import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import validateForm from 'src/app/helpers/validateform';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent {
  public departments: any = [];
  DepartmentForm!: FormGroup;
 edit = false;

  constructor(private api: ApiService,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService) { }
    
  ngOnInit(): void {
    this.api.getDepaertNames()
      .subscribe(res => {
        this.departments = res;
      })


    this.DepartmentForm = this.fb.group({
      Department_Name: ['', Validators.required],
      Created_by: [''],
      Created_Date: ['']
    })
  }
  save(){
    this.edit = false;
  }
    onSave()
    {
        //perfor logic for signup
        this.auth.onDepartmentSave(this.DepartmentForm.value)
          .subscribe({
            next: (res => {
              // alert(res.message);
              this.toastr.success('Record added Succesfully', 'SUCCESS');
              this.DepartmentForm.reset();
              this.router.navigate(['department'])
            }),
            error: (err => {
              // alert(err?.error.message)
              this.toastr.error('Something went wrong', 'ERROR');
            })
          })
      }
    }
  



