import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public lineChartData:Array<any> = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    public lineChartLabels:Array<any> = ['Este mês', 'Esta semana', 'Hoje'];
    public lineChartType:string = 'line';
    public pieChartType:string = 'pie';
   
    // Pie
    public pieChartLabels:string[] = ['Este mês', 'Esta semana', 'Hoje'];
    public pieChartData:number[] = [130,84, 7];

}
