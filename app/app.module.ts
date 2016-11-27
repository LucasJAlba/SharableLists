import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
import { AllListViewComponent } from './allListView.component';
import { OneListViewComponent } from './oneListView.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
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