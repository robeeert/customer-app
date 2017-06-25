import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer Overview';
  addNewCustomer = 'Add New Customer';
  firstName = 'First Name';
  lastName = 'Last Name';
  age = 'Age';
  gender = 'Gender';
  options = 'Options';
  edit = 'Edit';
  delete = 'Delete';
  navi = 'Navi';
  data = JSON.parse(localStorage.getItem('masterData'));
}
