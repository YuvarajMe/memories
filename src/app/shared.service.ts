import { Injectable } from '@angular/core';

@Injectable()
export class sharedService {

    loggedIn:boolean = false;

    isLoggedIn = function () {
        return this.loggedIn;
    };

    updateLoginStatus = function (status) {
        console.log('updating status to ' + status);
        this.loggedIn = status;
        console.log(this.loggedIn);
    }
}