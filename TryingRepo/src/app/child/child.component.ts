import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  name: string;
  cities: string[];
  c: number =0;
  code: string = "password";
  constructor() { 
    this.name = "Anna";
    this.cities = ['Karachi', 'Islamabad', 'Muree'];
  }

  addCity() : void {
    this.c++;
  }

}
