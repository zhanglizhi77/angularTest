import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RootComponent} from './root.component';
import {LoginComponent} from './../login/login.component';
import {HomeComponent} from './../home/home.component';
import {RoutersModule} from './../../routers/router.module';
@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        RoutersModule,
        HttpClientModule
    ],
    declarations:[
        RootComponent,
        LoginComponent,
        HomeComponent
    ],
    providers:[],
    bootstrap:[RootComponent]
})
export class RootModule {

}