import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestorService } from '../servicios/gestor.service';

interface Vehiculo {
  placa: string;
  marca: string;
  color: string;
  precio: number;
}

@Component({
  selector: 'app-gestion',
  standalone: true,
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  vehiculosFiltrados: Vehiculo[] = [];
  busqueda: string = '';

  constructor(private gestorService: GestorService, private router: Router) { }

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos(): void {
    this.gestorService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      this.vehiculosFiltrados = data;
    });
  }

  filtrarVehiculos(): void {
    this.vehiculosFiltrados = this.vehiculos.filter(vehiculo => 
      vehiculo.placa.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  eliminar(placa: string): void {
    this.gestorService.deleteVehiculo(placa).subscribe(() => {
      this.cargarVehiculos(); // Refrescar la lista después de eliminar
    });
  }

  editar(vehiculo: Vehiculo): void {
    this.router.navigate(['/editar', vehiculo.placa]);
  }
}
