import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MaterialModule } from './module/material.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { LoginService } from './service/login.service';
import { AddBookService } from './service/add-book.service';
import { UploadImageService } from './service/upload-image.service';
import { GetBookListService } from './service/get-book-list.service';
import { GetBookService } from './service/get-book.service';
import { EditBookService } from './service/edit-book.service';
import { RemoveBookService } from './service/remove-book.service';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent, DialogResultExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
	DialogResultExampleDialog
  ],
  entryComponents: [
    DialogResultExampleDialog
  ],
  imports: [
	BrowserAnimationsModule,
    BrowserModule,
	MaterialModule,
	FormsModule,
	routing,
	HttpModule
  ],
  providers: [
	LoginService,
	AddBookService,
	UploadImageService,
	GetBookListService,
	GetBookService,
	EditBookService,
	RemoveBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
