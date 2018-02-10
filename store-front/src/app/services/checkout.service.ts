import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
import { UserBilling } from '../models/user-billing';
import { UserShipping } from '../models/user-shipping';
import { UserPayment } from '../models/user-payment';

@Injectable()
export class CheckoutService {

  public serverPath = AppConst.serverPath;
  
  constructor(private http: Http) { }
  
  checkout(userShipping: UserShipping, userBilling: UserBilling, userPayment: UserPayment, shippingMethod: string){
	  let url = this.serverPath + '/checkout/checkout';
	  let order = {
		  "userShipping":userShipping,
		  "userBilling":userBilling,
		  "userPayment":userPayment,
		  "shippingMethod":shippingMethod
	  };
	  let headers = new Headers({
		  'Content-Type':'application/json',
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.post(url, order, {headers: headers});
  }
  
  getUserOrder(){
	  let url = this.serverPath + '/checkout/getUserOrder';
	  let headers = new Headers({
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.get(url, {headers: headers});
  }

}
