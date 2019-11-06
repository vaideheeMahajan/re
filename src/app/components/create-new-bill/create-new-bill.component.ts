import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateNewBillApiService } from './service/create-new-bill.service'
import { CreateMenuComponent } from '../billing/create-menu.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-new-bill',
  templateUrl: './create-new-bill.component.html',
  styleUrls: ['./create-new-bill.component.css']
})
export class CreateNewBillComponent implements OnInit {

  // newBillDetails = new FormControl();
  newBillDetails: any = {};
  // itemsList : any = [];
  modes: string[] = ['Business to Business', 'Business to Customer'];
  gstPercentageList: string[] = ['5%', '12%', '18%', '28%'];
  rowData: any;
  editMode: Boolean = false;
  
  constructor(
    private createNewBillApiService  : CreateNewBillApiService,
    private router: Router
    ) {

     }

  ngOnInit() {
    this.rowData = history.state;
    if(this.rowData && this.rowData._id){
      this.editMode = true;
      this.newBillDetails = this.rowData;
    }else{
      this.newBillDetails.itemsList = [];
    }
  }

  fillNewItemDetails () {
    var item = this.getNewItemBlankInstance();
    this.newBillDetails.itemsList.push(item);
    
  }

  getNewItemBlankInstance () {
    let newItem = {
      description: null,
      amount: null,
      quantity: null,
      gstPercentage: null,
      discount: null,
      total: null
    };
    return newItem;
  }

  saveNewBillDetails () {
    if(!this.editMode){
      this.createNewBillApiService.addNewBill(this.newBillDetails).subscribe((data : any)=> {
        if(data){
          this.closeNewBillDetailsDialog();
        }
      })
    }else{
      this.createNewBillApiService.updateBill(this.newBillDetails).subscribe((data : any)=> {
        if(data.result == "Success"){
          this.closeNewBillDetailsDialog();
        }
      })
    }
  }

  closeNewBillDetailsDialog () {
    this.router.navigateByUrl('/billing')
  }

}
