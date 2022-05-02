import { Component, OnInit } from '@angular/core';
import { banner } from 'src/app/entity/banner.model';
import { CartelService } from 'src/app/service/cartel.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  carteles: banner[] = [];

  constructor(
    private cartelService: CartelService
  ) { }

  ngOnInit(): void {
    this.obtenerCarteles();
  }

  obtenerCarteles(): void {
    const endPoint: string = "http://localhost:3002";
    this.cartelService.obtenerCarteles(endPoint).subscribe(
      (data) => {
        data.forEach((cartel) => {
          const cartelIncluir: banner = new banner(cartel.id, cartel.nombre, cartel.imagen);
          this.carteles.push(cartelIncluir);
        })
      }
    )
  }

}
