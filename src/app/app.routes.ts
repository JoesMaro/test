import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiComponent } from './api/api.component';
import { GestionComponent } from './gestion/gestion.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/autos', pathMatch: 'full' },
    { path: 'vehiculos', component: VehiculosComponent   },
    { path: 'gestion', component: GestionComponent },
    { path: 'api', component: ApiComponent },  

];
