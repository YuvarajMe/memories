import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

    tagName: String;
    memories: any;


    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.tagName = this.route.snapshot.params['name'];
    }

    // memories = [
    //     {
    //         id: 1,
    //         title: 'New Year Celebration',
    //         image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
    //         total_comment: 10,
    //         posted_date: '2017-03-18 19:20',
    //     },
    //     {
    //         id: 2,
    //         title: 'Diwali Celebration',
    //         image: 'http://hindutva.info/wp-content/uploads/2015/01/diwali_fireworks_golden_temple.jpg',
    //         total_comment: 25,
    //         posted_date: '2017-02-23 05:30',
    //     },
    //     {
    //         id: 3,
    //         title: 'Christmas Celebration',
    //         image: 'http://coaster-nation.com/wp-content/uploads/2016/11/SWO_O-Wondrous-Night.jpg',
    //         total_comment: 55,
    //         posted_date: '2017-02-16 15:45',
    //     }
    // ]


}
