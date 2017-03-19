import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-memories',
    templateUrl: './memories.component.html',
    styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {

    memoryId: number;
    memory: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.memoryId = this.route.snapshot.params['id'];
        this.loadMemoryById(this.memoryId);
    }

    loadMemoryById = function (memoryId): any {
        if (memoryId) {
            // loading corresponding memory image by id
            this.memory = {
                id: memoryId,
                title: 'New Year Celebration',
                description: 'New Year is the time at which a new calendar year begins and the calendar\'s year count increments by one.',
                image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                total_comment: 10,
                posted_date: '2017-03-18 19:20',
                tags: ['Celebration', 'NewYear', 'Friends'],
                images: [
                    {
                        id: 1,
                        image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                    },
                    {
                        id: 2,
                        image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                    },
                    {
                        id: 3,
                        image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                    },
                    {
                        id: 4,
                        image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                    },
                    {
                        id: 5,
                        image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                    },
                    {
                        id: 6,
                        image: 'https://blog.currencykart.com/wp-content/uploads/46859865-new-year-wallpaper.jpg',
                    }
                ]
            }
        }
    }


}
