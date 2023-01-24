import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent {
  activeTab: number = 1;
/**
 *
 */

  setCurrentTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }
}
