import { Component } from '@angular/core';
import { ProyectosDataService } from '../service/proyectos-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent {
  parametro: string = '';
  dataProyect: any = {};

  constructor(
    private proyecyoService: ProyectosDataService,
    private rutaActiva: ActivatedRoute,
    private route: Router
  ) {
    rutaActiva.params.subscribe(
      ({ nombre }) => (this.parametro = decodeURI(nombre))
    ); //tomo de la ruta el nombre del royecto
  }

  ngOnInit(): void {
    this.dataProyect = this.proyecyoService.getdataProyecto(this.parametro);
  }
  Regresar() {
    this.route.navigate(['/proyectos']);
  }
}
