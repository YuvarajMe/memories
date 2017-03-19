import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

    imageId: number;
    imageDetails: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.imageId = this.route.snapshot.params['id'];
        this.loadMemoryImageDetails(this.imageId);
    }

    private loadMemoryImageDetails(imageId: number) {
        this.imageDetails = {
            id: 1,
            image: '....',
            total_comment: 30,
            comments: [
                {
                    id: 1,
                    user_id: 1,
                    user_imagee: '...',
                    comment: 'This is a test comment'
                }
            ]
        }
    }

    toggleComment = function (image) {
        var imageId = image.id;
        image.isCommentLoading = true;

        if (image.showComment == undefined) {
            image.showComment = true;
        } else {
            image.showComment = !image.showComment;
        }


        setTimeout(function () {

            image.isCommentLoading = false;

        }, 3000);




    }

}
