import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateNewBillApiService {

  constructor(
    private http : HttpClient
  ) { }

  addNewBill (jsonParams): Observable<any> {
    let url = "/api/add-bill";
    return this.http.post(url, jsonParams);
  }

  updateBill (billDetails): Observable<any> {
    let url = "/api/update-bill/" + billDetails._id;
    let reqBody = billDetails;
    return this.http.put(url, reqBody);
  }
}
