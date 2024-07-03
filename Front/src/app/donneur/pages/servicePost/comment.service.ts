import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) { }

  createComment(postId: number, content: string): Observable<any> {
    const url = `${this.apiUrl}/create`;
    const body = { postId, content };
    const headers = this.getHeaders();

    return this.http.post<any>(url, body, headers).pipe(
      catchError(this.handleError)
    );
  }

  getCommentsByPostId(postId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${postId}`;
    const headers = this.getHeaders();

    return this.http.get<any[]>(url, headers).pipe(
      catchError(this.handleError)
    );
  }

  private getHeaders() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return { headers };
  }

  private handleError(error: any) {
    console.error('Error in CommentService:', error);
    return throwError(error);
  }
}
