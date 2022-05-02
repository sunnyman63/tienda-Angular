import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoria } from '../entity/categoria.model';
import { producto } from '../entity/producto.model';

@Injectable({
  providedIn: 'root'
})
export class GenerarProductosService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerCategorias(endPoint: string): Observable<any[]> {
    const urlEndPoint: string = endPoint;
    return this.http.get<[]>(urlEndPoint);
  }

}
