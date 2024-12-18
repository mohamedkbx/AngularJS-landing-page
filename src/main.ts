import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { MainComponent } from './app/main/main.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <app-main></app-main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./styles.scss'],
})
export class App {}

bootstrapApplication(App);
