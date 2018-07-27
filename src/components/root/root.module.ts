import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from './../../service/interceptor.service';
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
    providers:[
        {
            provide:HTTP_INTERCEPTORS,    //指定HTTP拦截器被提供
            useClass:InterceptorService,  //设置拦截器类的类型
            multi:true                   //告诉Angular HTTP_INTERCEPTORS是一个值的数组，而不是一个单一的值
        }
    ],
    bootstrap:[RootComponent]
})
export class RootModule {

}