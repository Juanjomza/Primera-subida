import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}
  obtenerCursosPersona(): Observable<any> {
    return this.http.get('/assets/data/cursos.json');
  }
}
