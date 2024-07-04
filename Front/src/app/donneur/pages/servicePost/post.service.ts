import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostUser } from '../../../models/PostUser';


@Injectable({
  providedIn: 'root'
})
export class Post {
  private apiUrl = 'http://localhost:8080/api/posts'; 

  constructor(private http: HttpClient) { }

  createPost(post: PostUser): Observable<PostUser> {
    return this.http.post<PostUser>(this.apiUrl, post, this.httpOptions);
  }

  getAllPosts(): Observable<PostUser[]> {
    return this.http.get<PostUser[]>(this.apiUrl);
  }

  getPostById(postId: number): Observable<PostUser> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.get<PostUser>(url);
  }

  likePost(postId: number): Observable<string[]> {
    const url = `${this.apiUrl}/${postId}/like`;
    return this.http.put<string[]>(url, null);
  }

  searchByLieux(lieux: string): Observable<PostUser[]> {
    const url = `${this.apiUrl}/search/${lieux}`;
    return this.http.get<PostUser[]>(url);
  }

  updatePost(postId: number, post: PostUser): Observable<PostUser> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.put<PostUser>(url, post, this.httpOptions);
  }

  deletePost(postId: number): Observable<string[]> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete<string[]>(url);
  }

  private get httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
