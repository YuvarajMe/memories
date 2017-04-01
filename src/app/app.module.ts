import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import {AppRoute} from './app.routes';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {MomentModule} from 'angular2-moment';
import {MemoriesComponent} from './memories/memories.component';
import {ImageComponent} from './image/image.component';
import {TagComponent} from './tag/tag.component';
import {EqualValidator} from "./equal.validator.directive";
// import {sharedService} from "./shared.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateMemoryComponent} from './dashboard/create-memory/create-memory.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        SidebarComponent,
        NavbarComponent,
        HomeComponent,
        MemoriesComponent,
        ImageComponent,
        TagComponent,
        EqualValidator,
        CreateMemoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MomentModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(AppRoute)
    ],
    entryComponents: [CreateMemoryComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
