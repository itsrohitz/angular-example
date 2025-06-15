import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightPipe } from './highlight.pipe';
import { HighlightHoverDirective } from './highlight-hover.directive';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormsExampleComponent,
    HighlightPipe,
    HighlightHoverDirective,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule, CommonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
