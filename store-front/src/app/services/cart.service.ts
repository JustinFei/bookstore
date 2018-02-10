import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';


@Injectable()
export class CartService {

  public serverPath = AppConst.serverPath;
  
  constructor(private http: Http) { }
  
  addItem(id: number, qty: number){
	  let url = this.serverPath + '/cart/add';
	  let cartItemInfo = {
		  "bookId":id,
		  "qty":qty
	  };
	  let headers = new Headers({
		  'Content-Type':'application/json',
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.post(url, cartItemInfo, {headers: headers});
  }
  
  getCartItemList(){
	  let url = this.serverPath + '/cart/getCartItemList';
	  let headers = new Headers({
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.get(url, {headers: headers});
  }
  
  getShoppingCart(){
	  let url = this.serverPath + '/cart/getShoppingCart';
	  let headers = new Headers({
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.get(url, {headers: headers});
  }
  
  updateCartItem(cartItemId: number, qty:number){
	  let url = this.serverPath + '/cart/updateCartItem';
	  let cartItemInfo = {
		  "cartItemId":cartItemId,
		  "qty":qty
	  };
	  let headers = new Headers({
		  'Content-Type':'application/json',
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.post(url, cartItemInfo, {headers: headers});
  }
  
  removeCartItem(id: number){
	  let url = this.serverPath + '/cart/removeCartItem';
	  let headers = new Headers({
		  'Content-Type':'text/plain',
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.post(url, id, {headers: headers});
  }

}
