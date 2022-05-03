import { Component, OnInit } from '@angular/core';
import { banner } from 'src/app/entity/banner.model';
import { cartel } from 'src/app/entity/cartel.interface';
import { CartelService } from 'src/app/service/cartel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carteles: cartel[] = [];

  constructor(
    private cartelService: CartelService
  ) { }

  ngOnInit(): void {
    this.obtenerCarteles();
  }

  obtenerCarteles(): void {
    const endPoint: string = "http://localhost:3001";
    this.cartelService.obtenerCarteles(endPoint).subscribe(
      (data) => {
        data.forEach((cartel) => {
          const cartelIncluir: cartel = new banner(cartel.id, cartel.nombre, cartel.imagen);
          this.carteles.push(cartelIncluir);
        })
      }
    )
  }

}
