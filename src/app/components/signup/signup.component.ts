import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import validateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,
     private auth: AuthService, 
     private router: Router,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required],
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  onSignup(){
    if(this.signupForm.valid){
 //perfor logic for signup
this.auth.signup(this.signupForm.value)
.subscribe({
  next:(res=>{
    // alert(res.message);
    this.toastr.success('User added Succesfully','SUCCESS');
    this.signupForm.reset();
    this.router.navigate(['login'])
  }),
  error:(err=>{
    // alert(err?.error.message)
    this.toastr.error('Something went wrong','ERROR');
  })
})
    }else{
    validateForm.validateAllFormFields(this.signupForm);
    //logic for throwing error
    }
  }
 
 

}
