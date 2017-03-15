/**
 * Created by yuvaraj on 14/03/17.
 */

import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

export const AppRoute:Routes = [
    {
        path : '',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    }
    ];


