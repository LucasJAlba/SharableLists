import { Component } from '@angular/core';

@Component({
  moduleId: String(module.id),
  selector: 'app-navigation',
  template: `<nav>
                <a routerLink="/all" routerLinkActive="active">Home</a>
                <a routerLink="/list" routerLinkActive="active">One List</a>
                <a routerLink="/settings" routerLinkActive="active">Settings</a>
            </nav>`
})
export class NavComponent { }