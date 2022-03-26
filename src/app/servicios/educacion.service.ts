import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  constructor(private http: HttpClient) {}
  obtenerDatosEducacion(): Observable<any> {
    return this.http.get('/assets/data/educacion.json');
  }
}
