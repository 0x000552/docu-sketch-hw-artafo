import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AwesomeIconGeneratorComponent } from './awesome-icon-generator/awesome-icon-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeIconGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
