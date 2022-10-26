import { Injectable } from '@angular/core';
import { Segment } from '../Segment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  private url: string = "http://192.168.1.70:8080/codecademy/catalog/"

  constructor(private http: HttpClient) { }

  getSegmentById(id:number): Observable<Segment[]>  {
    return this.http.get<Segment[]>(this.url + id);
  }


}
