import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../servicios/vehiculo.service'; 
import { CommonModule } from '@angular/common';

interface Vehiculo {
  placa: string;
  marca: string;
  color: string;
  precio: number;
}

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
    });
  }
}
