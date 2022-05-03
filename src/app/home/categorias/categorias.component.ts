import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/entity/categoria.model';
import { CartelService } from 'src/app/service/cartel.service';
import { Router } from '@angular/router';
import { cartel } from 'src/app/entity/cartel.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  carteles: cartel[] = [];

  constructor(
    private cartelService: CartelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerCarteles();
  }

  obtenerCarteles(): void {
    const endPoint: string = "http://localhost:3003";
    this.cartelService.obtenerCarteles(endPoint).subscribe(
      (data) => {
        data.forEach((cartel) => {
          const cartelIncluir: cartel = new categoria(cartel.id, cartel.nombre, cartel.imagen);
          this.carteles.push(cartelIncluir);
        })
      }
    )
  }

  navegarACategoria(idCategoria: number): void {
    this.router.navigate(['categoria'],{ queryParams: {id: idCategoria} });
  }

}
