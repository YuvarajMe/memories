import {Component, OnInit} from '@angular/core';

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

interface User
{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
