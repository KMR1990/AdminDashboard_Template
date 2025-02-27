import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  chartOptions = {};
  @Input() data: any = [];
  @Input() label: any;
  @Input() total: any;
  @Input() percentage: any;


  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth : 0,
        margin : [2,2,2,2],
        height : 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside : true
      },
      legend : {
        enabled : false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      series: [
        { data : [71, 78, 39, 66] }
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
