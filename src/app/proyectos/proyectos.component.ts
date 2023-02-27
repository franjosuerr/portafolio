import { ProyectosDataService } from './service/proyectos-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  proyectos: Array<any> = [];
  constructor(private proyectosService: ProyectosDataService) {}

  ngOnInit(): void {
    this.proyectos = this.proyectosService.data;
    console.log(this.proyectos);
  }

  getURI(nombre: string) {
    return encodeURI(nombre);
  }
}
