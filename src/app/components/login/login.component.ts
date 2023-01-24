import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import validateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
type: string = "password";
loginForm!: FormGroup;
  constructor(private fb: FormBuilder,
     private auth: AuthService,
      private router: Router,
       private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin(){
    if(this.loginForm.valid){

      console.log(this.loginForm.value)
      //send the obj to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res.message);
          this.loginForm.reset();

          // alert(res.message);
          this.auth.storeToken(res.token);
          this.toastr.success('Login Succesfully','SUCCESS');
          this.router.navigate(['dashboard'])
          
        },
        error:(err)=>{
          this.toastr.error('Something went wrong!', 'ERROR');
          console.log(err);
        },
      });

    }else{
    validateForm.validateAllFormFields(this.loginForm);
   
    }
  }


}
