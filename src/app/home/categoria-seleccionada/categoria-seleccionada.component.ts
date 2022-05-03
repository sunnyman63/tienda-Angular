import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoria } from 'src/app/entity/categoria.model';
import { producto } from 'src/app/entity/producto.model';
import { CartelService } from 'src/app/service/cartel.service';
import { GenerarProductosService } from 'src/app/service/generar-productos.service';

@Component({
  selector: 'app-categoria-seleccionada',
  templateUrl: './categoria-seleccionada.component.html',
  styleUrls: ['./categoria-seleccionada.component.scss']
})
export class CategoriaSeleccionadaComponent implements OnInit {

  productos: producto[] = [];
  categoriaId: string = "";
  categoriaNombre: string = "";

  constructor(
    private productoService: GenerarProductosService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.categoriaId = this.route.snapshot.queryParamMap.get("id") ?? "";
  }

  ngOnInit(): void {
    this.comprobarUrl();
    this.obtenerCategoria();
  }

  comprobarUrl(): void {
    if(this.categoriaId == "") {
      this.router.navigate(['']);
    }
  }

  obtenerCategoria(): void {
    this.productoService.obtenerCategoria(this.categoriaId).subscribe(
      (data) => {
          this.categoriaNombre = data[0].nombre;
          const productosAux: any[] = data[0].productos;
          productosAux.forEach((product)=>{
            const prod: producto = 
              new producto(
                          product.id,
                          product.tipo,
                          product.nombre,
                          product.color,
                          product.precio,
                          product.disponibilidad,
                          product.tallas,
                          product.imagen);
            this.productos.push(prod);
          })
      }
    )
  }
}
