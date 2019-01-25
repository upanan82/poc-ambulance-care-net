import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalErComponent } from './modal-er/modal-er.component';
import { ModalEmsComponent } from './modal-ems/modal-ems.component';
import { Scenario, ScenarioMock } from './scenarios';

@NgModule({
  declarations: [
    AppComponent,
    ModalErComponent,
    ModalEmsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [{ provide: Scenario, useClass: ScenarioMock }],
  bootstrap: [AppComponent]
})
export class AppModule { }
