import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbaoutComponent } from './abaout.component';

const routes: Routes = [
  {
    path: '',
    component: AbaoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbaoutRoutingModule {}
