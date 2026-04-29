import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private lastScrollTop = 0;
  private scrollListener: (() => void) | null = null;

  ngOnInit(): void {
    this.scrollListener = () => this.handleScroll();
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private handleScroll(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (!navbar) return;

    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollTop + 10) {
      // Scrolling down - hide navbar
      navbar.style.transform = 'translateY(-100%)';
    } else if (currentScroll < this.lastScrollTop - 10) {
      // Scrolling up - show navbar
      navbar.style.transform = 'translateY(0)';
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
