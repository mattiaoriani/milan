import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class UploadDataService {

  footballer:any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = true; // Change to false before deployment
   }

    getAllFootballers(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      let ep = this.prepEndpoint('footballers/footballerInfo');
      return this.http.get(ep,{headers: headers})
        .map(res => res.json());
    }

    getAllTrophies(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      let ep = this.prepEndpoint('trophies/trophies');
      return this.http.get(ep,{headers: headers})
        .map(res => res.json());
    }

    getAllStories(){
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      let ep = this.prepEndpoint('stories/stories');
      return this.http.get(ep,{headers: headers})
        .map(res => res.json());
    }


    prepEndpoint(ep){
      if(this.isDev){
        return ep;
      } else {
        return 'http://localhost:8080/'+ep;
      }
    }

}
