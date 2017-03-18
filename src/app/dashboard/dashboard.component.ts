import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   memories = [
       { title: 'New Year Celebration', image : 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg', total_comment : 10
       , posted_date : '2017-03-18 19:20', tags : ['Celebration', 'NewYear', 'Friends']},
       { title: 'Diwali Celebration', image : 'http://hindutva.info/wp-content/uploads/2015/01/diwali_fireworks_golden_temple.jpg', total_comment : 25,
           posted_date : '2017-02-23 05:30', tags : ['Diwali', 'Celebration', 'Fun', 'Crackers']},
       { title: 'Christmas Celebration', image : 'http://coaster-nation.com/wp-content/uploads/2016/11/SWO_O-Wondrous-Night.jpg', total_comment: 55,
           posted_date : '2017-02-16 15:45', tags : ['Christmas', 'Santa', 'Celebration', 'Tree']}
  ]
}
