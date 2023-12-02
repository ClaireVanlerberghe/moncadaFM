import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';
import { LibraryComponent } from './library/library.component';
import { SpeakButtonComponent } from './speak-button/speak-button.component';
import { JingleComponent } from './jingle/jingle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    QuestionComponent,
    LibraryComponent,
    SpeakButtonComponent,
    JingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
