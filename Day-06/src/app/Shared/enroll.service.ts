import { Injectable } from "@angular/core";

@Injectable()
export class EnrollService {
    onEnrollClicked(title:string){
       alert('thanks for subscribing '+title+'course') ;
    }
}