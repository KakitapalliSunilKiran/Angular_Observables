import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private url: string ="assets/employee.json"
  //http://localhost:8080/api/v1/getdata
  constructor(private httpClient:HttpClient) { }

  getData():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);
  }
}
