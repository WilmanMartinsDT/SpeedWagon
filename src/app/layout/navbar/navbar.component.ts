import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  dropdownOpen = false;
  private scrollListener: (() => void) | null = null;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  // Cierra el dropdown si se clicka fuera
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-user-icon') && !target.closest('.ocean-dropdown')) {
      this.dropdownOpen = false;
    }
  }

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

    if (window.scrollY > 80) {
      navbar.style.background = 'rgba(0, 12, 35, 0.98)';
      navbar.style.boxShadow = '0 4px 30px rgba(0, 80, 160, 0.4)';
      navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.35)';
    } else {
      navbar.style.background = 'rgba(0, 12, 35, 0.88)';
      navbar.style.boxShadow = '0 2px 30px rgba(0, 80, 160, 0.25)';
      navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.2)';
    }
  }
}
