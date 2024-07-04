import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map ,catchError} from 'rxjs/operators';
import { UserStorageService } from './../storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/auth/";

const AUTH_HEADER = "Authorization";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/users';


  constructor(private http: HttpClient,
    private userStorageService: UserStorageService
  ) { }

  registerDonneur(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "donneur/sign-up", signupRequestDTO);
  }

  registerHopital(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "hopital/sign-up", signupRequestDTO);
  }

  registerAssociation(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "association/sign-up", signupRequestDTO);
  }

  registerBankSang(signupRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "bankSang/sign-up", signupRequestDTO);
  }
 
  getCurrentUser(): Observable<any> {
   
    const url = `${this.baseUrl}/current-user`; 
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
     
      console.error('Une erreur est survenue :', error.error.message);
    } else {
     
      console.error(`Code d'erreur : ${error.status}, ` + `Message : ${error.message}`);
    }
    return throwError('Quelque chose s\'est mal passé; veuillez réessayer plus tard.');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(BASIC_URL + "authenticate", { username, password }, { observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => {
          console.log( res.body);
         
          this.userStorageService.saveUser(res.body);
          const tokenLength = res.headers.get(AUTH_HEADER)?.length;
          const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7, tokenLength);

          console.log(bearerToken);
          this.userStorageService.saveToken(bearerToken);
          return res;
        })
      );
  }
}
