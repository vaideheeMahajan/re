import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BillingApiService  } from "./service/billing-api.service";

@Component({
    template : `<button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
    <mat-icon>more_vert</mat-icon>
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item (click)="onClickEdit()">
      <span>Edit</span>
    </button>
    <button mat-menu-item  (click)="onClickDelete()">
      <span>Delete</span>
    </button>
    <button mat-menu-item>
     <span>Generate Bill</span>
    </button>
  </mat-menu>`
})
export class CreateMenuComponent {
  constructor(private router: Router,
    private billingApiService  : BillingApiService) { 
  }
  public params:any;
  rowData:any;
  template: any;

    agInit(params: any) {
        this.params = params;
    }

    onClickEdit() {
      this.rowData = this.params.api.rowModel.getRow(this.params.rowIndex).data;
      this.router.navigateByUrl("/createBill", {"state": this.rowData});
        
    }

    onClickDelete() {
      console.log(this.params.context);
      this.rowData = this.params.api.rowModel.getRow(this.params.rowIndex).data;
      this.billingApiService.deleteBill(this.rowData._id).subscribe((data : any)=> {
        if(data.msg == "Success"){
          this.billingApiService.getBills().subscribe((data : any)=> {
            if(data){
              this.params.api.setRowData(data);
            }
          }) 
        }
      })
        
    }

  ngOnInit() {
  }


}
