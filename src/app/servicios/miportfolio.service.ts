import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiportfolioService {

  constructor(private http:HttpClient) { 
  }
  obtenerDatosPersona():Observable<any>{
   return this.http.get('/assets/data/persona.json')
  }
}
