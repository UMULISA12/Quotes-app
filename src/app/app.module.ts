// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import {FormsModule} from '@angular/forms';

// import { QuoteComponent } from './quote/quote.component';
// import { QuoteDetailsComponent } from './quote-details/quote-details.component';
// import { QuoteFormComponent } from './quote-form/quote-form.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';




// @NgModule({
//   declarations: [
//     AppComponent,
//     QuoteDetailsComponent,
//     QuoteComponent,
//     // StrikethroughDirective,
//     // DateCountPipe,
//     QuoteFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    QuoteComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }