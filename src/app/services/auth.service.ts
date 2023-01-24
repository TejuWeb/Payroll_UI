import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7172/api/";
  private userPayload: any;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodeToken();
  }

  signup(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}User/register`, userObj)

  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}User/authenticate`, loginObj)
  }

  onDepartmentSave(departObj: any){
    return this.http.post<any>(`${this.baseUrl}Department/department`, departObj)
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }


  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  decodeToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken()
  }
  getFullNameFromToken() {
    if (this.userPayload)
      return this.userPayload.name;
  }

  getRoleFromToken() {
    if (this.userPayload)
      return this.userPayload.role;
  }
}
