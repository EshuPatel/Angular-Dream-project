import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyusersService } from '../myusers.service';

@Component({
  selector: 'app-aboutus',
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit{
  users:any;
  msg: string='';

  constructor(private myusersservice: MyusersService){

  }

  ngOnInit(): void {
    this.msg=this.myusersservice.helloService();
  this.myusersservice.getPlaceholderUsers().subscribe(response => {
    this.users=response;
  });

}






}
