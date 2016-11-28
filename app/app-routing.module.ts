import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllListViewComponent } from './all-list-view.component';
import { OneListViewComponent } from './one-list-view.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: 'all', component: AllListViewComponent },
  { path: 'list/:id', component: OneListViewComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: AllListViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }