import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostUser } from '../../../models/PostUser';
/* export interface PostUser {
  id?: number;
  title: string;
  content: string;
  lieux: string;
  // Ajoutez d'autres champs selon votre entité PostUser
} */

@Injectable({
  providedIn: 'root'
})
export class Post {
  private apiUrl = 'http://localhost:8080/api/posts'; // Assurez-vous que cela correspond à votre configuration

  constructor(private http: HttpClient) { }

  // Create a new post
  createPost(post: PostUser): Observable<PostUser> {
    return this.http.post<PostUser>(this.apiUrl, post, this.httpOptions);
  }

  // Get all posts
  getAllPosts(): Observable<PostUser[]> {
    return this.http.get<PostUser[]>(this.apiUrl);
  }

  // Get a post by ID
  getPostById(postId: number): Observable<PostUser> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.get<PostUser>(url);
  }

  // Like a post
  likePost(postId: number): Observable<string[]> {
    const url = `${this.apiUrl}/${postId}/like`;
    return this.http.put<string[]>(url, null);
  }

  // Search posts by location
  searchByLieux(lieux: string): Observable<PostUser[]> {
    const url = `${this.apiUrl}/search/${lieux}`;
    return this.http.get<PostUser[]>(url);
  }

  // Update a post
  updatePost(postId: number, post: PostUser): Observable<PostUser> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.put<PostUser>(url, post, this.httpOptions);
  }

  // Delete a post
  deletePost(postId: number): Observable<string[]> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete<string[]>(url);
  }

  // HTTP options used for headers and other configurations
  private get httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
