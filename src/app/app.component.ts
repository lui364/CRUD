import { Component } from '@angular/core';
import { Employee } from './models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee [] = [
{ id: 1, name: "Luis",country:"USA"},
{id: 2, name: "Alfredo",country:"España"},
{id:3,name: "Angel",country:"Dominicano"}
];

seleEmployee: Employee = new Employee();

openForEdit(employee: Employee){
this.seleEmployee = employee;
}

addOrEdit(){

  if(this.seleEmployee.id === 0){
    this.seleEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.seleEmployee);
  }
  this.seleEmployee = new Employee();
}
delete(){
  if(confirm("Esta seguro de que quiere borrar este registro ?")){
    this.employeeArray = this.employeeArray.filter(x => x != this.seleEmployee);
  this.seleEmployee = new Employee();
  }
}
}
