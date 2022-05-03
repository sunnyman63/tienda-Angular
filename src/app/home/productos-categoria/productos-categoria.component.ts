import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/entity/producto.model';

@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.scss']
})
export class ProductosCategoriaComponent implements OnInit {

  @Input() producto?: producto;
  @Input() categoriaId: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  navegarAProducto(idProducto: number): void {
    this.router.navigate(['categoria',this.categoriaId,'producto'],{ queryParams: {p: idProducto} });
  }

}
