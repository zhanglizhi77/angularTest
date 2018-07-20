import { Component,OnInit } from '@angular/core';
@Component({
    templateUrl:'./login.template.html'
})

export class LoginComponent implements OnInit {
    private user = {account:'15626509928',password:''};
    constructor(){
    }
    ngOnInit() {
        
    }
    login(){
        console.log(this.user);
    }
}