import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DondeIrComponent } from './donde-ir/donde-ir.component';
import { FestividadesComponent } from './festividades/festividades.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'visita', component: DondeIrComponent},
  {path: 'info', component:InfoComponent},
  {path: "festividades", component: FestividadesComponent},
  { path: 'informacion/:id', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
