import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantalladosComponent } from './pantallados/pantallados.component';
import { PantallaunoComponent } from './pantallauno/pantallauno.component';

const routes: Routes = [
  {path: "dashboard", component: PantallaunoComponent},
  {path: "login", component: PantalladosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
