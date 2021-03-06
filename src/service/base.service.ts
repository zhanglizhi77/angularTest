import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {stringify} from 'qs';
@Injectable()
export class HttpService{
    constructor(private http:HttpClient){}
    
    get(url:string,callback){
        return this.http.get(url).subscribe((result:any)=>{
            if(callback && typeof callback === 'function'){
                callback.call(this,result);
            }
        });
    }

    post(url:string,data:any,callback){
        return this.http.post(url,stringify(data)).subscribe((result:any)=>{
            if(callback && typeof callback === 'function'){
                callback.call(this,result);
            }
        });
    }

}