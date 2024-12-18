import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="header">
      <div class="logo">
        <img src="../../assets/images/idea.png" alt="Logo" />
        <h2>Collab hub</h2>
      </div>

      <button
        class="menu-toggle"
        (click)="toggleMenu()"
        [class.active]="isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" [class.open]="isMenuOpen">
        <a href="#">Products</a>
        <a href="#">Startup tools</a>
        <a href="#">Features</a>
        <a href="#">Live Support</a>
        <a href="#">Our Plans</a>
        <a href="#" class="active">My Account</a>
      </nav>
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
