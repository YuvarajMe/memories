import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tags:any = [
      'NewYear',
      'Diwali',
      'Christmas',
      'Fun',
      'Celebration',
      'Cake',
      'Birthday',
      'Flowers'
  ]
}
