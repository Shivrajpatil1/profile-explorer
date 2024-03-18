import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = ' http://localhost:3000/profile' ;
  id: any;
  dataById: any;
  databyid: any;
  
    
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

    postApiCall(endPoint: string, formData: any) {
      let url = this.url + endPoint;
      return this.http.post(url, formData);
    }

    putApiCall(endPoint: string, formData: any, id: any){
      let url = this.url  + '/' + id;
      return this.http.put(url, formData);
    }

    detailsApiCall(endPoint: string,id:number){
      let url = this.url  + '/' + id;
    return this.http.post(url,'');
    }
}


