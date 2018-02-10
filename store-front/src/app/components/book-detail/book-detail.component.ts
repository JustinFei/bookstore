import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { AppConst } from '../../constants/app-const';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public serverPath = AppConst.serverPath;
  public book: Book = new Book();
  public bookId: number;
  public numberList = [1,2,3,4,5,6,7,8,9];
  public qty:number;
  
  public addBookSuccess: boolean = false;
  public notEnoughStock: boolean = false;
  
  constructor(private bookService: BookService, private cartService: CartService, private http: Http, private router: Router, private route: ActivatedRoute) { }

  onAddToCart(){
	  this.cartService.addItem(this.book.bookId, this.qty).subscribe(
		res => {
			console.log(res.text());
			this.addBookSuccess = true;
		},
		error => {
			console.log(error.text());
			if(error.text() == "Not enough stock!")
				this.notEnoughStock = true;
		}
	  );
  }
  
  ngOnInit() {
	  this.route.params.forEach((params:Params) => {
		   this.bookId = Number.parseInt(params['id']);
	  });
	  
	  this.bookService.getBook(this.bookId).subscribe(
		res => {
			this.book = res.json();
			this.book.publicationDate = new Date(this.book.publicationDate).toISOString().slice(0,10);
			if(this.book.inStockNumber < 9){
				this.numberList = this.numberList.filter(num => num <= this.book.inStockNumber);
			}else{
				this.numberList = [1,2,3,4,5,6,7,8,9];
			}
		},
		error => {
			console.log(error);
		}
	  );
	  this.qty = 1;
  }

}
