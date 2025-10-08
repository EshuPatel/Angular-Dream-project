import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pname: string = '';
  pemail: string = '';
  pmessage: string = '';
  submittedData: any = null;

  //router DI uisng Constructors
  constructor(private router:Router){
  
  }

  onSubmit() {
    this.submittedData = {
      name: this.pname,
      email: this.pemail,
      message: this.pmessage,
    };

    console.log('Submitted Data:', this.submittedData);
    // After 10 seconds, navigate to 'details' component along with 'submittedData' Object
    setTimeout(() => {
      this.router.navigate(['/det'], {
        state: { data: this.submittedData },
      });
    }, 10000); // 10 seconds
  }}
