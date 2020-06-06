import { Component, OnInit, ViewChild  } from '@angular/core';
import { Temperatura } from '../../models/temperatura';
import { TemperaturaService } from '../../services/temperatura.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
  providers: [TemperaturaService]
})
export class GraficasComponent implements OnInit {

  public temperaturas: Temperatura[];
  cargando = false;



  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [16, 16, 15, 16, 16, 15, 16, 16, 15, 16], label: 'Temperatura' },
    { data: [96, 95, 90, 91, 86, 87, 84, 86, 87, 84], label: 'Nivel' },
    { data: [66, 58, 60, 69, 56, 57, 49, 56, 57, 49], label: 'Humedad' }
  ];



  // datos de temperatura
  constructor( private ts: TemperaturaService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.ts.getTemperaturas()
    .subscribe( resp => {
      // console.log(resp);
      this.temperaturas = resp;
      this.cargando = false;
    });
  }



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }


}
