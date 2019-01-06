import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdviceSheet } from './advice-sheet';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getAllAdviceSheet(): Observable<AdviceSheet[]> {
    return this.httpClient.get<AdviceSheet[]>('http://localhost:8080/api/adviceSheet');
  }

  public getAdviceSheetById(id: number): Observable<AdviceSheet> {
    return this.httpClient.get<AdviceSheet>('http://localhost:8080/api/adviceSheet/' + id);
  }

  public getDoctorById(id: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>('http://localhost:8080/api/doctor' + id);
  }

  public addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>('http://localhost:8080/api/doctors', doctor);
  }

}
