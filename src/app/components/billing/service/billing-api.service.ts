import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingApiService {

  constructor(
    private http : HttpClient
  ) { }

  getBills (): Observable<any> {
    let url = "/api/bills";
    return this.http.get(url);
  }
  
  deleteBill (billId): Observable<any> {
    let url = "/api/delete-bill/" + billId;
    let reqBody = {};
    return this.http.delete(url, reqBody);
  }
}
