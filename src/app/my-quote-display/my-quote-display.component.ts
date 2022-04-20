import { Component, OnInit } from '@angular/core';
// import { Quote } from '../quote';
@Component({
  selector: 'app-my-quote-display',
  templateUrl: './my-quote-display.component.html',
  styleUrls: ['./my-quote-display.component.css']
})
export class MyQuoteDisplayComponent implements OnInit {
	// @Input() quote:quote; 
   // highestVotes: number = 0; 
   // highestQuote: number = 0;
	// quotes = [
   //    new Quote('Samora', 'Winter is Coming!'), // Added One Quote to be Displayed by default when Component is Initialized
   // ]

   // // Function calculates the quote with the highest votes after every Downvote or Upvote
   // calculateHighestVotes() {
   //    for (var i = 0; i < this.quotes.length; i++) { // Loop through Current Posted quotes
   //       if (this.quotes[i].noOfVotes > this.highestVotes) { // If noOfVotes for current looped quote is higher than the current highestVotes
   //          this.highestVotes = this.quotes[i].noOfVotes; // Assign the new noOfVotes value to highestVotes
   //          this.highestQuote = i; // Take the index of the quote with the highest noOfVotes and assign its index to highestQuote
   //       }
   //    }
   // }

   // // Function adds new Posted quotes to quotes array
  	// addNewQuote(Quote) {
  	// 	this.quotes.push(Quote);
  	// }

   // // Function for Deleting a Quote, we pass a boolean value and the index of the quote we want to delete
  	// deleteQuote(complete:boolean,index){
   //    // If complete = true then
   //    if (complete){
   //       let toDelete = confirm(`Are you sure you want to delete quote?`) // Display Alert to Confirm Delete
   //       // If toDelete = true then
   //       if(toDelete){
   //           this.quotes.splice(index,1) // Use the splice array method to remove the given index
   //       }
   //    }
   // }

   // // Downvote Function
   // downvote(i) {
   //  	this.quotes[i].noOfVotes -=1; // Decrement noOfVotes value by 1
   // }

   // // Upvote Function
   // upvote(a){
   //  	this.quotes[a].noOfVotes +=1; // Increments noOfVotes value by 1
   // }

  	constructor() { }

   // ngOnInit is a lifecycle hook. It is called each time the component is created.
  	ngOnInit() {
  	}

}
