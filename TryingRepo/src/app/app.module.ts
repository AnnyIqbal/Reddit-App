import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // bootsrap integration to angular2 app

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PassingInputComponent } from './passing-input/passing-input.component';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, PassingInputComponent, CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
