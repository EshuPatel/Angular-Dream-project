import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeId: number =101;
  employeeName:string = "Rahul";
  employeeAge: number= 30;

  title="Employee Details- Data Binding using various Directives"

  isManager: boolean =false;
  a:boolean= true;

  //Array
  skills: string[]= ['JavaScript', 'Angular', 'TypeScript', 'HTML5'];

  //enum
  Position: PositionType= PositionType.SeniorDeveloper;

  //Object
  address: {street: string, city: string, postalCode: number}= 
  {
    street:'123 NYC',
    city: 'New York',
    postalCode: 109091
  };


  //any data type(can be of any type)
  extraInfo: any= 'Additional employee info';

  //event binding- handling method
  message: string= '';

  //Two-way Binding
employeePosition:string='Developer';

  //methd defn. --event binding
  hello(): void{
    this.message="Hello from event binding in angular by-" + this.employeeName;
  }
  clear(): void{
    this.message='';
  }
  toggleManagerStatus(): void{
    this.isManager=! this.isManager;
  }


  //Property Binding
  username: string='James Gosling';
  info: string= "Property Binding -One way";

  updateUsername(){
    this.username='John Doe';
  }

  convertToDate(){
    const date= new Date();
    return date.toLocaleDateString();
  }

  num1: number=100;
  num2: number= 200;

  add(): number{
    return this.num1+ this.num2;
  }
}



// Enum for Position Type
enum PositionType {
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead
}