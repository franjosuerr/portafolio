import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'proyectos',
    loadChildren: () =>
    import('./proyectos/proyectos.module').then((m) => m.ProyectosModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
    import('./contacto/contacto.module').then((m) => m.ContactoModule),
  },
  {
    path: 'about',
    loadChildren: () =>
    import('./about/abaout.module').then((m) => m.AbaoutModule),
  },
  { path: '**', redirectTo: 'proyectos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {}
}
