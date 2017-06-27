import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor() { }

  messages = {
    title: 'Customer Details',
    id: 'Customer ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    birthday: 'Birthday',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    lastContact: 'Last Contact',
    customerLifetimeValue: 'Customer Lifetime Value',
    save: 'Save',
    cancel: 'Cancel',
  }


}
