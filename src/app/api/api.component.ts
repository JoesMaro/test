import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../servicios/api.service'; 

interface Usuario {
  id: string;
  name: string;
  description: string;
  image: string;
  atributos: string[];
}

@Component({
  selector: 'app-api',
  standalone: true,
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  imports: [CommonModule] 
})
export class ApiComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsuarios().subscribe({
      next: (data) => {
        console.log(data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Error ', err);
      }
    });
  }
}
