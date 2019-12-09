import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
API_URL: string = environment.apiUrl;
  constructor(public http: HttpClient) {
  }

 getList(url: any): Observable<any> {
    return this.http.get(`${this.API_URL}${url}`);
  }
  public getData(url: any, id: any): Observable<any> {
    return this.http.get(`${this.API_URL}${url}/${id}`);
  }
  public postData(url, obj): Observable<any> {
    return this.http.post(`${this.API_URL}${url}`, obj);
  }
  public updateData(url, obj, id): Observable<any> {
    return this.http.put(`${this.API_URL}${url}/${id}`, obj);
  }
  public deleteData(url,  id): Observable<any> {
    return this.http.delete(`${this.API_URL}${url}/${id}`);
  }

}
