import { Component, OnInit } from '@angular/core';
import { CreateMenuComponent } from './create-menu.component';
import { BillingApiService  } from "./service/billing-api.service";
import { GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  private rowData: any[];
  public gridOptions : GridOptions
  constructor(
    private billingApiService  : BillingApiService,
  ) { 
    this.gridOptions = <GridOptions>{
      context : {
        componentParent: this
      }
    }
  } 

  columnDefs = [
    {headerName: 'Customer Name', field: 'customerName', width: 300},
    {headerName: 'Invoice Number', field: 'invoiceNumber', width: 300 },
    {headerName: 'Created Date', field: 'createdDate',width: 300},
    {headerName: 'Amount', field: 'amount', width: 300},
    {
			headerName: '',
      cellRendererFramework: CreateMenuComponent,
			width: 80
		}
  ];

  // rowData = 
  // [
  //     { customerName: '1', invoiceNumber: 'Celica', createdDate: '3-Aug-2019', amount: '10' },
  //     { customerName: '2', invoiceNumber: 'Mondeo', createdDate: '8-Aug-2019', amount: '10'  },
  //     { customerName: '3', invoiceNumber: 'Boxter', createdDate: '10-Aug-2019', amount: '10' }
  // ];

  ngOnInit () {
   this.billingApiService.getBills().subscribe((data : any)=> {
        if(data){
          this.rowData = data;
        }
      })
  };

  // onGridReady(params){
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  // }

}
