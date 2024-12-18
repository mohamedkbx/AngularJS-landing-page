import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-icons">
          <a href="#" aria-label="Instagram"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </div>

        <div class="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Other Projects</a>
          <a href="#">Help Center</a>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="footer-copyright">
        <p>&copy; Getillustration.com. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
