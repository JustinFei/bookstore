import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { AppConst } from '../../constants/app-const';
// import {MatTableDataSource, MatPaginator} from '@angular/material';
// import {PageEvent} from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit {

  public selectedBook: Book;
  public bookList: Book[];
  public serverPath = AppConst.serverPath;
  // pageEvent: PageEvent;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // pageSize = 10;
  // pageSizeOptions = [5, 10, 20];
  // length: number;
  public dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  
  
  constructor(private bookService: BookService, private http: Http, private router: Router, private route: ActivatedRoute) { }
  
  // onPageEvent(pageEvent: PageEvent){
	  // this.pageEvent = pageEvent;
  // }
  
  // applyFilter(keyword: string){
	  // this.filteredBookList = this.bookList.filter(book => book.title.includes(keyword) || book.author.includes(keyword) || book.description.includes(keyword));
  // }
  
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnInit():void{
	  this.route.queryParams.subscribe(params => {
		  if(params['bookList']){
			  this.bookList = JSON.parse(params['bookList']);
			  console.log(this.bookList);
			  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
				  // Destroy the table first
				  dtInstance.destroy();
				  // Call the dtTrigger to rerender again
				  this.dtTrigger.next();
			  });
		  }else{
			  this.bookService.getBookList().subscribe(
				res => {
					console.log(res.json());
					this.bookList = res.json();
					this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
					  // Destroy the table first
					  dtInstance.destroy();
					  // Call the dtTrigger to rerender again
					  this.dtTrigger.next();
					});
				},
				error => {
					console.log(error);
				}
			  );
		  }
	  });
	  // this.dtOptions = {
      // pagingType: 'full_numbers',
      // pageLength: 10};
	  
  }
  
  onSelect(book: Book){
	  this.selectedBook = book;
	  this.router.navigate(['/bookDetail/', this.selectedBook.bookId]);
  }

}
