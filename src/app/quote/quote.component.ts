import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Buddha','"Just as a candle cannot burn without fire, men cannot live without a spiritual life."','Alice UMULISA',0,0,new Date(2018,3,14)),
    new Quote('Friedrich Nietzsche','"The man of knowledge must be able not only to love his enemies but also to hate his friends."','Alice UMULISA',0,0,new Date(2018,3,14)),
    new Quote('Anatole France','"To accomplish great things, we must not only act, but also dream; not only plan, but also believe."','Alice UMULISA',0,0,new Date(2018,3,14)),
    new Quote('Abraham Lincoln','"Be sure you put your feet in the right place, then stand firm."','Alice UMULISA',0,0,new Date(2018,3,14)),
    new Quote('Jesus Christ','"If you will know yourselves, then you will be known and you will know that you are the sons of the living father. But if you do not know yourselves, then you are in poverty and you are poverty."','Alice UMULISA',0,0,new Date(2018,3,14)),
  ]


  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}

quoteComplete(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}

// // completeQuote(isComplete,index){
// //   if (isComplete){
// //       this.quotes.splice(index,1);
// //       }
// //       }

      toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }


constructor() { }
ngOnInit() {
}
}





// addNewQuote(quote){
//   let quoteLength = this.quotes.length;
//   quote.id=quoteLength+1;
//   quote.completeDate = new Date(quote.completeDate)
//   this.quotes.push(quote)

// }
// toogleDetails(index) {
//   this.quotes[index].showDescription = !this.quotes[index].showDescription;
// }
// // completeQuote(isComplete, index) {
//   if (isComplete) {
//     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`)
//     if (toDelete) {
//       this.quotes.splice(index, 1)
//     }
//   }
// }

//   deleteQuote(isComplete,index){
//     if (isComplete){
//         let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
        
//         if(toDelete){
//             this.quotes.splice(index,1)
//         }
//     }
// }




// constructor() { }

// ngOnInit() {
// }
// }