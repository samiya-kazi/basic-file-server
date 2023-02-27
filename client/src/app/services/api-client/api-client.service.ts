import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://localhost:4000'

  constructor (private http: HttpClient) { }

  postFiles (files: File[]) : Observable<{fileNames: string[]}> {
    const data = new FormData();
    files.forEach(file => data.append('file', file));
    return this.http.post<{fileNames: string[]}>(this.rootUrl + '/file', data);
  }

  addNewPost (title: string, description: string, fileNames: string[]) : Observable<Post> {
    return this.http.post<Post>(this.rootUrl + '/post', {title, description, fileNames});
  }
}
