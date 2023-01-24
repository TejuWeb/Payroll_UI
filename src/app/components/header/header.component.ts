import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public fullName : string = "";
 
 
constructor(private auth: AuthService, private userStore: UserStoreService ) {
  
}
ngOnInit(): void {
this.userStore.getFullNameFromStore()
.subscribe(val=>{
  let fullNameFromToken = this.auth.getFullNameFromToken();
  this.fullName = val || fullNameFromToken
})
}

logout(){
  this.auth.signOut();
}
}
