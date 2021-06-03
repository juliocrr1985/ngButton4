import { Component, OnInit } from '@angular/core';
import {  MyServiceService } from "../services/my-service.service";


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],

})
export class ButtonComponent implements OnInit {

  constructor(private myService:MyServiceService) { }
  
  title:string = 'primerTitulo';
  
  ngOnInit(): void {
     this.myService.getTitle().subscribe( res => {
       console.log('res', res[0]);
       this.title = res[0];      
     })
  }
}
