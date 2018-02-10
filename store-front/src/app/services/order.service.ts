import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
import { Order } from '../models/order';

@Injectable()
export class OrderService {

  public serverPath = AppConst.serverPath;
  
  constructor(private http: Http) { }
  
  getOrderList(){
	  let url = this.serverPath + '/order/getOrderList';
	  let headers = new Headers({
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.get(url, {headers: headers});
  }

}
