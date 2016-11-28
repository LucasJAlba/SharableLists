import { Component } from '@angular/core';

@Component({
  moduleId: String(module.id),
  selector: 'app-navigation',
  template: `<nav>
                <a routerLink="/all" routerLinkActive="active">Home</a>
                <a routerLink="/settings" routerLinkActive="active">Settings</a>
            </nav>`,
  styles: [String(require("./nav.component.scss"))]
})
export class NavComponent { }