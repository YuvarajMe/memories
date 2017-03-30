import { Injectable } from '@angular/core';

@Injectable()
export class sharedService {

    loggedIn:boolean = false;

    isLoggedIn() : boolean {
        return this.loggedIn;
    };

    updateLoginStatus(status) : void {
        this.loggedIn = status;
    }

}