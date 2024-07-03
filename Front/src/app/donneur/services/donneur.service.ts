import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';



const BASIC_URl = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class DonneurService {

  constructor(private http: HttpClient) { }

  postAd(postDTO:any): Observable<any> {
    const userId= UserStorageService.getUserId();
    return this.http.post(BASIC_URl + `api/donneur/ad/${userId}`, postDTO, {
      headers : this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders= new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer' + UserStorageService.getToken()
    )
  }
}
