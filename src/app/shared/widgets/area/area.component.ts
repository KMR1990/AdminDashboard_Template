import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions = {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Random DATA'
      },
      subtitle: {
        text: 'Demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: [
        {name:'Asia', data : [500,600,800,900,1400,3500,5200]},
        {name:'Africa', data : [100,107,111,133,221,766,1771]},
        {name:'Europe', data : [163,206,276,450,550,700,920]},
        {name:'America', data : [18,31,54,156,339,818,1200]},
        {name:'Australia', data : [2,2,4,6,13,30,46]}
      ]
    };


    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

}
