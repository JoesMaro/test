import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Vehiculo {
  placa: string;
  marca: string;
  color: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class GestorService {
  private apiUrl = 'http://localhost:3000/vehiculos'; 

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

  deleteVehiculo(placa: string): Observable<void> {
    
    return this.http.delete<void>(`${this.apiUrl}/${placa}`);
  }

  getVehiculo(placa: string): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.apiUrl}/${placa}`);
  }
}
