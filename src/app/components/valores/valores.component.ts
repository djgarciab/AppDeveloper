import { Component, OnInit } from '@angular/core';
import { Temperatura } from '../../models/temperatura';
import { TemperaturaService } from '../../services/temperatura.service';
import { Nivel } from '../../models/nivel';
import { NivelService } from '../../services/nivel.service';
import { Humedad } from '../../models/humedad';
import { HumedadService } from '../../services/humedad.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css'],
  providers: [TemperaturaService , NivelService, HumedadService]
})
export class ValoresComponent implements OnInit {

  public temperaturas: Temperatura[];
  public niveles: Nivel[];
  public humedades: Humedad[];
  cargando = false;
  constructor( private temperaturaService: TemperaturaService,
    private nivelService: NivelService, private humedadService: HumedadService) { }

  ngOnInit(): void {
    this.getTemperaturas();
    this.getNiveles();
    this.getHumedades();
  }

  getTemperaturas() {
    this.cargando = true;
    this.temperaturaService.getTemperaturas()
    .subscribe( resp => {
      // console.log(resp);
      this.temperaturas = resp;
      this.cargando = false;
    });
  }

  getNiveles() {
    this.cargando = true;
    this.nivelService.getNiveles()
    .subscribe( resp => {
      // console.log(resp);
      this.niveles = resp;
      this.cargando = false;
    });
  }

  getHumedades() {
    this.cargando = true;
    this.humedadService.getHumedades()
    .subscribe( resp => {
      // console.log(resp);
      this.humedades = resp;
      this.cargando = false;
    });
  }


}
