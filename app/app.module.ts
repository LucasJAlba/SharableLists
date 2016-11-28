import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring in-memory web api
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
import { AllListViewComponent } from './all-list-view.component';
import { OneListViewComponent } from './one-list-view.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [AppComponent,
    NavComponent,
    AllListViewComponent,
    OneListViewComponent,
    SettingsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }