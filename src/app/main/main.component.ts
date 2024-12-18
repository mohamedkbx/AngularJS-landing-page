import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  template: `
    <main>
      <section class="hero-section">
        <div class="hero-image">
          <img src="../../assets/images/10.png" alt="Collaboration Platform" />
        </div>
        <div class="hero-content">
          <h1>Work across devices</h1>
          <p>All the resources you need for a successful start in one place</p>
          <div class="button-group">
            <button class="btn primary">Get Started today</button>
            <button class="btn secondary">Our Plans</button>
          </div>
        </div>
      </section>
      <section class="features-section">
        <div class="feature">
          <img src="../../assets/images/3.png" alt="Feature" />
          <div class="feature__text">
            <h2>Free Live Support</h2>
            <p>
              We're always here whenever you need us,our free live support will
              answer all your questions immediately
            </p>
          </div>
        </div>
        <div class="feature">
          <img src="../../assets/images/4.png" alt="Feature" />
          <div class="feature__text">
            <h2>Community insights</h2>
            <p>
              All communications done through our platforn is highly encrypted
              and fully secure, we care about privacy!
            </p>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrl: './main.component.scss',
})
export class MainComponent {}
