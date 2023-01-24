import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { DepartmentComponent } from './components/department/department.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { EmployeeInfoComponent } from './components/Employee Mgmt/employee-info/employee-info.component';
import { EmpInfoComponent } from './components/Employee Mgmt/emp-info/emp-info.component';
import { ContactInfoComponent } from './components/Employee Mgmt/contact-info/contact-info.component';
import { EmploymentInfoComponent } from './components/Employee Mgmt/employment-info/employment-info.component';
import { AllowanceComponent } from './components/Employee Mgmt/allowance/allowance.component';
import { DeductionComponent } from './components/Employee Mgmt/deduction/deduction.component';
import { SecurityComponent } from './components/Employee Mgmt/security/security.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    DepartmentComponent,
    EmployeeInfoComponent,
    EmpInfoComponent,
    ContactInfoComponent,
    EmploymentInfoComponent,
    AllowanceComponent,
    DeductionComponent,
    SecurityComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),


  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
