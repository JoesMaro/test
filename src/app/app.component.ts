import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { HttpClient, } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { GestionComponent } from './gestion/gestion.component';
import { ApiComponent } from './api/api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VehiculosComponent,NavbarComponent,GestionComponent,ApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehiculos';
}
