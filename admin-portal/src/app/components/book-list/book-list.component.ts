import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { GetBookListService } from '../../service/get-book-list.service';
import { RemoveBookService } from '../../service/remove-book.service';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private selectedBook: Book;
  private checked: boolean;
  private bookList: Book[];
  private allChecked: boolean;
  private removeBookList: Book[] = new Array();
  
  constructor(private getBookListService: GetBookListService, private removeBookService: RemoveBookService, private router: Router, public dialog: MatDialog) { }
  
  onSelect(book: Book){
	  this.selectedBook = book;
	  this.router.navigate(['/viewBook', this.selectedBook.bookId]);
  }
  
  openDialog(book: Book){
	  let dialogRef = this.dialog.open(DialogResultExampleDialog);
	  dialogRef.afterClosed().subscribe(
		res => {
			console.log(res);
			if(res == "yes"){
				this.removeBookService.sendBook(book.bookId).subscribe(
					res =>{
						console.log(res);
						this.getBookList();
					},
					error => {
						console.log(error);
					}
				);
			}
		},
	  );
  }
  
  removeSelectedBooks(){
	  let dialogRef = this.dialog.open(DialogResultExampleDialog);
	  dialogRef.afterClosed().subscribe(
		res => {
			console.log(res);
			if(res == "yes"){
				for(let book of this.removeBookList){
					this.removeBookService.sendBook(book.bookId).subscribe(
						res =>{
							console.log(res);
						},
						error => {
							console.log(error);
						}
					);
				}				
			}
			location.reload();
		},
	  );
  }
  
  getBookList(){
	  this.getBookListService.getBookList().subscribe(
		res => {
			console.log(res.json());
			this.bookList = res.json();
		},
		error => {
			console.log(error);
		}
	  );
  }
  
  updateRemoveBookList(checked: boolean, book: Book){
	  if(checked){
		  this.removeBookList.push(book);
	  }else{
		  this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
		  this.allChecked = false;
	  }
  }
  
  updateSelected(checked: boolean){
	  if(checked){
		  this.allChecked = true;
		  this.removeBookList = this.bookList.slice();
	  }else{
		  this.allChecked = false;
		  this.removeBookList = [];
	  }
  }

  ngOnInit() {
	  this.getBookList();
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogResultExampleDialog>){
  }

}