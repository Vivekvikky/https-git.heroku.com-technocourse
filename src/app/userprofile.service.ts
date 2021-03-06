import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }

  

  //reading data from server.js
  readProfile():Observable<any>
  {
    return this.http.get('/user/profile');
  }
  readsaveprofile(v)
  {
    this.http.put('/user/profile',v).subscribe();
    console.log(v);
  }

}
