import { proyectos } from './../../shared/data/Proyectos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosDataService {
  private dataService = proyectos;

  get data() {
    return this.dataService;
  }

  getdataProyecto(nombre: string) {   
   let proyeto= this.dataService.filter((data) => data.nombre === nombre);
    return proyeto[0]
  }

  constructor() {}
}
