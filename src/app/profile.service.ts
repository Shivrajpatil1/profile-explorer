import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = ' http://localhost:3000/profile' ;
  
    
  constructor(private http: HttpClient) { }

  ProfileDetails(){
    return this.http.get(this.url);
  }

  editApiCall(  id? : any){
    let url = id? this.url  + '/' + id : this.url ;
    return this.http.get(url);
  }

  deleteApiCall(endPoint:string,id:number){
    let url = this.url  + '/' + id;
    return this.http.delete(url)
    }


}


