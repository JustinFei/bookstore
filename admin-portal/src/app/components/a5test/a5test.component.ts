import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a5test',
  templateUrl: './a5test.component.html',
  styleUrls: ['./a5test.component.css']
})
export class A5testComponent implements OnInit {
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  
  showAnswer(){
	  this.showSpinner = true;
	  
	  setTimeout(() => {
		  this.answerDisplay = this.answer;
		  this.showSpinner = false;
	  }, 2000)
  }

  constructor() { }

  ngOnInit() {
  }

}
