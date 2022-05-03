import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../entity/producto.model';

@Injectable({
  providedIn: 'root'
})
export class GenerarProductosService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerPorductosDeCategoria(idCategoria: string): Observable<producto[]> {
    const urlEndPoint: string = "http://localhost:3003/categoria/"+idCategoria+"/productos";
    return this.http.get<producto[]>(urlEndPoint);
  }

  public obtenerCategoria(idCategoria: string): Observable<any[]> {
    const urlEndPoint: string = "http://localhost:3003/categoria/"+idCategoria;
    return this.http.get<any[]>(urlEndPoint);
  }

}
