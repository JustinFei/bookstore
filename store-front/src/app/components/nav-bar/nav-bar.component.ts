import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Book } from '../../models/book';
import { LoginService } from '../../services/login.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn: boolean = false;
  public keyword: string;
  public bookList: Book[] = [];
  
  constructor(private loginService: LoginService, private bookService: BookService, private router: Router) { }
  
  logout(){
	  this.loginService.logout().subscribe(
		res => {
			location.reload();
		},
		error => {
			console.log(error);
		}
	  );
	  this.router.navigate(['/']);
  }
  
  onSearchByTitle(){
	  this.bookService.searchBook(this.keyword).subscribe(
		res => {
			this.bookList = res.json();
			
			let navigationExtras: NavigationExtras = {
				queryParams:{
					"bookList":JSON.stringify(this.bookList)
				}
			};
			this.router.navigate(['/bookList'], navigationExtras);
		},
		error => {
			console.log(error);
		}
	  );
  }

  ngOnInit() {
	  this.loginService.checkSession().subscribe(
		res => {
			this.loggedIn = true;
		},
		error => {
			this.loggedIn = false;
		}
	  );
  }

}
