import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
 constructor(){
    this.sortBy(this.currentSort)
  }
  messages= {
    title: 'Customer Overview',
    addNewCustomer: 'Add New Customer',
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    gender: 'Gender',
    options: 'Options',
    edit: 'Edit',
    delete: 'Delete',
    navi: 'Navi',
  }
  today = new Date();
  data = JSON.parse(localStorage.getItem('masterData')).map(item => {item.birthday = new Date(item.birthday); return item});
  currentSort = 'lastName';
  sortDirectionAscending = true;
  getAge = (date) => {
    return Math.floor((this.today.getTime() - new Date(date).getTime())/ 1000 / 60 / 60 / 24 / 365);
  }
  sortBy = (key) => {

    if (this.currentSort === key) {
      this.sortDirectionAscending = !this.sortDirectionAscending
    } else {
        this.sortDirectionAscending = this.data[0][key] instanceof Date ? false : true;
    }

    this.currentSort = key;
    this.data = this.data.sort((a,b) => this.sortDirectionAscending ? a[key] > b[key] : a[key] < b[key])
  }
}
