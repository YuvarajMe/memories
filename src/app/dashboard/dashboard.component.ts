import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

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

    tags:any = [
        'NewYear',
        'Diwali',
        'Christmas',
        'Fun',
        'Celebration',
        'Cake',
        'Birthday',
        'Flowers'
    ];

    toggleComment = function (memory) {
        var memoryId = memory.id;

        memory.isMemoryLoading = true;

        if(memory.showComment == undefined){
            memory.showComment = true;
        } else {
            memory.showComment = !memory.showComment;
        }


        var CallMemoriesForId = function() {
            setTimeout(function () {
                memory.comments = [
                    {
                        name: 'User 1',
                        comment: 'Wow! Nice photos.'
                    },
                    {
                        name: 'User 2',
                        comment: 'It was a wonderful celebration.'
                    },
                    {
                        name: 'User 3',
                        comment: 'Wow! Nice photos.'
                    },
                    {
                        name: 'User 4',
                        comment: 'It was a wonderful celebration.'
                    },
                    {
                        name: 'User 5',
                        comment: 'Wow! Nice photos.'
                    },
                    {
                        name: 'User 6',
                        comment: 'It was a wonderful celebration.'
                    },
                    {
                        name: 'User 7',
                        comment: 'Wow! Nice photos.'
                    },
                    {
                        name: 'User 8',
                        comment: 'It was a wonderful celebration.'
                    }
                ];
                memory.isMemoryLoading = false;

            }, 3000);
        };

        if (!memory.comments) {
            // call service only if comments are not fetched already
            CallMemoriesForId();
        } else {
            memory.isMemoryLoading = false;
        }


    }
}
