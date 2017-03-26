import { Component, OnInit } from '@angular/core';
import { DashboardService }  from "./dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService]

})
export class DashboardComponent implements OnInit {

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
    }

    memories = this.dashboardService.getMemories();


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
