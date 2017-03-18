/**
 * Created by yuvaraj on 14/03/17.
 */

import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";

export const AppRoute:Routes = [
    {
        path : '',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'app',
        component : HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }

    ];


