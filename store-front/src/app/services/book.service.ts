import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConst } from '../constants/app-const';
import { Router } from '@angular/router';

@Injectable()
export class BookService {
	
  public serverPath = AppConst.serverPath;

  constructor(private http: Http, private router: Router) { }
  
  getBookList(){
	  let url = this.serverPath + '/book/bookList';
	  let headers = new Headers({
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.get(url, {headers: headers});
  }
  
  getBook(id: number){
	  let url = this.serverPath + '/book/' + id;
	  let headers = new Headers({
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  return this.http.get(url, {headers: headers});
  }
  
  searchBook(keyword: string){
	  let url = this.serverPath + "/book/searchBook";
	  let tokenHeader = new Headers({
		  'Content-Type':'text/plain',
		  'x-auth-token':localStorage.getItem('xAuthToken')
	  });
	  
	  return this.http.post(url, keyword, {headers: tokenHeader});
  }

}
