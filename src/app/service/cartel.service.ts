import { Injectable } from '@angular/core';
import { cartel } from '../entity/cartel.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartelService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerCarteles(endPoint: string): Observable<cartel[]>{

    const urlEndPoint: string = endPoint;
    return this.http.get<cartel[]>(urlEndPoint);

  }

}
