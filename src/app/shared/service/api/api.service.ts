import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  get<T = any>(path: string, options: Object = this.httpOptions): Promise<T> {
    return this.http.get<T>(environment.apiUrl + path, options).toPromise();
  }

  post<T = any>(url: string, body: object, options: Object = this.httpOptions): Promise<T> {
    return this.http.post<T>(environment.apiUrl + url, body, options).toPromise();
  }

  put<T = any>(url: string, body: object, options: Object = this.httpOptions): Promise<T> {
    return this.http.put<T>(environment.apiUrl + url, body, options).toPromise();
  }

  delete<T = any>(url: string, options: object = this.httpOptions): Promise<T> {
    return this.http.delete<T>(environment.apiUrl + url, options).toPromise();
  }
}
