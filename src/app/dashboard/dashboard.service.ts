import { Injectable } from '@angular/core';
import { Memory } from "./memory";

@Injectable()
export class DashboardService {

    getMemories(): Memory[] {
        var memories;
        memories = [
            {
                id : 1,
                title: 'New Year Celebration',
                image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                total_comment: 10,
                posted_date: '2017-03-18 19:20',
                tags: ['Celebration', 'NewYear', 'Friends']
            },
            {
                id: 2,
                title: 'Diwali Celebration',
                image: 'http://hindutva.info/wp-content/uploads/2015/01/diwali_fireworks_golden_temple.jpg',
                total_comment: 25,
                posted_date: '2017-02-23 05:30',
                tags: ['Diwali', 'Celebration', 'Fun', 'Crackers']
            },
            {
                id: 3,
                title: 'Christmas Celebration',
                image: 'http://coaster-nation.com/wp-content/uploads/2016/11/SWO_O-Wondrous-Night.jpg',
                total_comment: 55,
                posted_date: '2017-02-16 15:45',
                tags: ['Christmas', 'Santa', 'Celebration', 'Tree']
            }
        ];
        return memories;
    }
}