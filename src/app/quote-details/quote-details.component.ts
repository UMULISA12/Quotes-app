// import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
// import {Quote} from '../quote'

// @Component({
//   selector: 'app-quote-details',
//   templateUrl: './quote-details.component.html',
//   styleUrls: ['./quote-details.component.css']
// })
// export class QuoteDetailsComponent implements OnInit {

//   @Input() quote:Quote;
//   @Output() isComplete= new EventEmitter<boolean>();

  // quoteComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

//   quoteDelete(complete:boolean){
//     this.isComplete.emit(complete);
//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }


// import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {Quote} from '../quote'

// @Component({
//   selector: 'app-quote-details',
//   templateUrl: './quote-details.component.html',
//   styleUrls: ['./quote-details.component.css']
// })
// export class QuoteDetailsComponent implements OnInit {

//   @Input() quote: Quote;
//   @Output() isComplete = new EventEmitter<boolean>();


//   quoteComplete(complete: boolean) {
//     this.isComplete.emit(complete);
//   }
//   // quoteDelete(complete:boolean){
//   // this.isComplete.emit(complete);
//   // }
//   quoteUpvote(){
//     this.quote.upvote++;
//   }
//   quoteDownvote(){
//   this.quote.downvote--;
//   }
//   constructor() { }

//   ngOnInit() {
//   }
// }


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

;
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  quoteUpvote(){
    this.quote.upvote++;
  }
quoteDownvote(){
  this.quote.downvote++;
}
  constructor() { }

  ngOnInit() {
  }


}