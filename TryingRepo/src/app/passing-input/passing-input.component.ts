import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passing-input',
  templateUrl: './passing-input.component.html',
  styleUrls: ['./passing-input.component.css'],
  inputs: ['info']
})
export class PassingInputComponent {
  info: string;
  constructor() {
    this.info = "hahaha"; //ye to display ni hua jo pass kia hai wo hua
   }

 

}
