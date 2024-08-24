import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Ajusta la interfaz para coincidir con la estructura del JSON
interface Usuario {
  id: string;
  name: string;
  description: string;
  image: string;
  atributos: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jritsqmet.github.io/web-api/crash.json'; 

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
