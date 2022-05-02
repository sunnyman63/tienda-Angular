import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PanelComponent } from './panel/panel.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaSeleccionadaComponent } from './categoria-seleccionada/categoria-seleccionada.component';
import { ProductoComponent } from './producto/producto.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    PanelComponent,
    CategoriasComponent,
    CategoriaSeleccionadaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
