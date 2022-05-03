import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from 'src/app/entity/producto.model';
import { CartelService } from 'src/app/service/cartel.service';
import { GenerarProductosService } from 'src/app/service/generar-productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto: producto;
  productoId: string;
  categoriaId: string;
  categoriaNombre: string = "";

  constructor(
    private categoriaService: CartelService,
    private productoService: GenerarProductosService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.productoId = this.route.snapshot.queryParamMap.get("p") ?? "";
    this.categoriaId = this.route.snapshot.paramMap.get("id") ?? "";
    this.producto = new producto();
  }

  ngOnInit(): void {
    this.comprobarUrl();
    this.sacarNombreCategoria();
    this.obtenerProducto();
  }

  comprobarUrl(): void {
    if(this.productoId == "") {
      this.router.navigate(['categoria'],{queryParams:{id:this.categoriaId}});
    }
    if(this.categoriaId == "") {
      this.router.navigate(['']);

    }
  }

  sacarNombreCategoria(): void {
    this.categoriaService.obtenerCarteles("http://localhost:3003").subscribe(
      (data) => {
        data.forEach((cat)=>{
          if(cat.id == parseInt(this.categoriaId)) {
            this.categoriaNombre = cat.nombre;
          }
        })
      }
    )
  }

  obtenerProducto(): void {
    this.productoService.obtenerPorductosDeCategoria(this.categoriaId).subscribe(
      (data) => {
        data.forEach((prod)=>{
          if(prod.id == parseInt(this.productoId)) {
            this.producto.setId(prod.id);
            this.producto.setTipo(prod.tipo);
            this.producto.setNombre(prod.nombre);
            this.producto.setColor(prod.color);
            this.producto.setPrecio(prod.precio);
            this.producto.setDisponibilidad(prod.disponibilidad);
            this.producto.setTallas(prod.tallas);
            this.producto.setImagen(prod.imagen);
          }
        })
      }
    )
  }

  tallaDisponible(talla: string): boolean {
    if(this.producto.getTallas().includes(talla)) {
      return true;
    } else {
      return false;
    }
  }

}
