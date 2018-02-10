import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { AddBookService } from '../../service/add-book.service';
import { UploadImageService } from '../../service/upload-image.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  
  private newBook : Book = new Book();
  private bookAdded : boolean;

  constructor(private addBookService: AddBookService, private uploadImageService: UploadImageService) { }
  
  onSubmit(){
	  this.addBookService.sendBook(this.newBook).subscribe(
		res => {
			console.log(res);
			this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).bookId);
			this.bookAdded = true;
			this.newBook = new Book();
			this.newBook.active = true;
			this.newBook.category = "Management";
			this.newBook.language = "English";
			this.newBook.format = "Paperback";
		},
		error => {
			console.log(error);
		}
	  );
  }

  ngOnInit() {
	  this.bookAdded = false;
	  this.newBook.active = true;
	  this.newBook.category = "Management";
	  this.newBook.language = "English";
	  this.newBook.format = "Paperback";
  }

}
