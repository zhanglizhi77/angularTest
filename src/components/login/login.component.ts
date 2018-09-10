import { Component } from '@angular/core';
import {HttpService} from './../../service/base.service';
@Component({
    templateUrl:'./login.template.html',
    providers:[HttpService]
})

export class LoginComponent{
    private user:Object;
    public title:String;
    public isReadonly:Boolean;
    public currentBtn:Boolean;
    constructor(private service:HttpService){
        this.user = {account:'15626509928',password:''};
        this.title = '登录';
        this.isReadonly = true;
        this.currentBtn = true;
    }
    login(){
        this.service.post('/login.action',this.user,(result)=>{
            console.log(result);
        });
        
    }
    register(){
        this.title = '注册';
        this.isReadonly = false;
    }
}