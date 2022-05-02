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
    private categoriaService: CartelService,
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
    const endPoint: string = "http://localhost:3003";
    this.categoriaService.obtenerCarteles(endPoint).subscribe(
      (data) => {
        data.forEach((cartel) => {
          if(cartel.id == parseInt(this.categoriaId)) {
            this.categoriaNombre = cartel.nombre;
            this.obtenerProductos(cartel.id);
          }
        })
      }
    )
  } 

  obtenerProductos(idCategoria: number): void {
    const endPoint: string = "http://localhost:3003";
    this.productoService.obtenerCategorias(endPoint).subscribe(
      (data)=> {
        data.forEach((cat)=>{
          if(cat.id == idCategoria) {
            const products: any[] = cat.productos;
            products.forEach((product)=>{
              const productoIncluir: producto = new producto(
                                                              product.id, 
                                                              product.tipo, 
                                                              product.nombre,
                                                              product.color,
                                                              product.precio,
                                                              product.disponibilidad,
                                                              product.tallas,
                                                              product.imagen);
              this.productos.push(productoIncluir);
            })
          }
        })
        console.log(this.productos);
      }
    );
  }

  navegarAProducto(idProducto: number): void {
    this.router.navigate(['categoria/producto'],{ queryParams: {p: idProducto} });
  }

}
