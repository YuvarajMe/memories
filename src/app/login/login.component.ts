import {Component, OnInit} from '@angular/core';
import {sharedService} from "../shared.service";
import { User} from "../user.interface";

declare const gapi: any;

@Component({
    selector: '[app-login]',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [sharedService]

})
export class LoginComponent implements OnInit {

    public auth2: any;
    // public gapi: any;
    user: User;


    constructor(public sharedService: sharedService) {
        this.user = <User>{};
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // this.googleInit();
    }

    // get isLoggedIn(): boolean {
    //     return this.sharedService.isLoggedIn();
    // }

    public update() {
        alert('calling update function');
        this.sharedService.updateLoginStatus(!this.sharedService.isLoggedIn);
    }

    changeStatus():void {
        this.sharedService.updateLoginStatus(true);
    }

    public googleInit() {
        let that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '284616683206-flapev0ljlv6r01etd7oqgp2vao7f8gl.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            that.attachSignin(document.getElementById('googleBtn'));
            that.logout(document.getElementById('logout'));
        });
    };

    public attachSignin(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {
                this.update();
                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                //YOUR CODE HERE
                alert(profile.getId());

            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    }

    public logout(element) {
        let that = this;
        this.auth2.attachClickHandler(element, {},
            function (googleUser) {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                    that.sharedService.updateLoginStatus(false);

                    alert('logout');
                    console.log('User signed out.');
                });
            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });

    }

}
