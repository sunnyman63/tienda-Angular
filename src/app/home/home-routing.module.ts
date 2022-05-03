import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaSeleccionadaComponent } from './categoria-seleccionada/categoria-seleccionada.component';
import { HomeComponent } from './home.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categoria', component: CategoriaSeleccionadaComponent},
  { path: 'categoria/:id/producto', component: ProductoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
