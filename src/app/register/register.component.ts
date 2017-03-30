import {Component, OnInit} from '@angular/core';
import {User} from "../user.interface";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user: User;

    constructor() {
        this.user = <User>{};
    }

    ngOnInit() {
    }

}
