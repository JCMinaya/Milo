import { Component, OnInit, ViewChildren } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { SingleDataSet, Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { OrderService } from './order.service';
import { OrderDialog } from './order-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  showingOrdersList = false;

  // Pie Chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Efectivo', 'Transferencia', 'Cheque', 'Tarjeta'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  
  // Bar Chart
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Crédito' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Contado' }
  ];

  // Line Chart
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions  = {responsive: true};
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private orderService:OrderService, public dialog: MatDialog) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

  toggleOrderList() {
    this.showingOrdersList = !this.showingOrdersList;
  }

  onCreateOrder(){
    const dialogRef = this.dialog.open(OrderDialog, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // if(result == null) return;
      // // console.log(result);
      // result.id = Math.floor((Math.random() * 10000000) + 1).toString();
      // result.itbis = result.itbis ? "18%": "";
      // this.orderService.create(result);
    })
  }

}
