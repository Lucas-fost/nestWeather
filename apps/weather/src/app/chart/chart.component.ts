/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Chart, Point, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
Chart.register(...registerables);

@Component({
  selector: 'weather-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input() info!: any;
  @ViewChild('chart')
  private chartRef!: ElementRef;
  private chart!: Chart;
  private data!: Point[];

  constructor() {
    this.data = this.info;
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.info,
            fill: false,
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          xAxes: {
            type: 'time',
            time: {
              round: 'minute',
              unit: 'hour',
            },
          },
        },
        datasets: {
          line: {
            backgroundColor: '#ff6363cc',
            borderColor: '#fa6363cc',
          },
        },
        plugins: {
          title: {
            display: false,
          },
          subtitle: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
