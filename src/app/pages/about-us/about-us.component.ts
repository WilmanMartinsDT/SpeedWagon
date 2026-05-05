import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit, AfterViewInit, OnDestroy {

  private particles: HTMLElement[] = [];
  private animationFrameId: number | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private counterObserver: IntersectionObserver | null = null;
  private statsAnimated = false;

  teamMembers = [
    {
      name: 'Wilman',
      role: 'Leader',
      bio: 'Passionate about the ocean and web development. Responsible for the Angular architecture of the project.',
      bio2: 'Leads the team with vision and technical direction, ensuring every wave of the project crashes perfectly.',
      icon: 'bi-person-circle',
      initials: 'WI',
      color: '#0dcaf0'
    },
    {
      name: 'Ken',
      role: 'Developer',
      bio: 'Focused on building dynamic components and connecting data services throughout the project.',
      bio2: 'Dives deep into the codebase, surfacing with elegant solutions and clean data flows.',
      icon: 'bi-person-circle',
      initials: 'KE',
      color: '#20c997'
    },
    {
      name: 'Sara',
      role: 'Designer & Developer',
      bio: 'Responsible for the visual identity and user experience of the Speed Wagon platform.',
      bio2: 'Crafts interfaces as fluid as the ocean itself, making every interaction feel natural and alive.',
      icon: 'bi-person-circle',
      initials: 'SA',
      color: '#6f42c1'
    },
    {
      name: 'Speed Wagon',
      role: 'Development & Design',
      bio: 'A dedicated team exploring the depths of the ocean through technology and design.',
      bio2: 'Together we chart unknown waters, turning curiosity into code and wonder into web experiences.',
      icon: 'bi-people-fill',
      initials: 'SW',
      color: '#fd7e14'
    }
  ];

  stats = [
    { label: 'Species Catalogued', value: 2400, suffix: '+', current: 0 },
    { label: 'Research Hours', value: 3800, suffix: '+', current: 0 },
    { label: 'Ocean Layers Explored', value: 5, suffix: '', current: 0 },
    { label: 'Team Members', value: 4, suffix: '', current: 0 }
  ];

  timelineEvents = [
    {
      year: '2023',
      title: 'Project Born',
      description: 'Speed Wagon started as a bold student idea: bring the deep ocean to everyone through technology.',
      icon: '🌊'
    },
    {
      year: '2023',
      title: 'First Dive',
      description: 'The team completed the initial research phase, cataloguing over 500 marine species.',
      icon: '🐠'
    },
    {
      year: '2024',
      title: 'Angular Launch',
      description: 'The platform was rebuilt with Angular and Bootstrap, enabling a fully dynamic experience.',
      icon: '🚀'
    },
    {
      year: '2024',
      title: 'Design Identity',
      description: 'Sara defined the visual language: dark oceanic palette, fluid animations and bioluminescent accents.',
      icon: '🎨'
    },
    {
      year: '2025',
      title: 'Deep Horizon',
      description: 'Full platform launch. Speed Wagon now reaches explorers worldwide.',
      icon: '🌍'
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createBubbles();
    this.setupScrollReveal();
    this.setupCounterAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    if (this.intersectionObserver) this.intersectionObserver.disconnect();
    if (this.counterObserver) this.counterObserver.disconnect();
  }

  getInitials(name: string): string {
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  }

  private createBubbles(): void {
    const hero = document.querySelector('.about-hero') as HTMLElement;
    if (!hero) return;

    for (let i = 0; i < 22; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      const size = Math.random() * 18 + 4;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 8 + 5}s`;
      bubble.style.animationDelay = `${Math.random() * 6}s`;
      bubble.style.opacity = `${Math.random() * 0.3 + 0.05}`;
      hero.appendChild(bubble);
      this.particles.push(bubble);
    }
  }

  private setupScrollReveal(): void {
    const options: IntersectionObserverInit = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset['delay'] || '0';
          setTimeout(() => {
            el.classList.add('revealed');
          }, parseInt(delay));
          this.intersectionObserver?.unobserve(entry.target);
        }
      });
    }, options);

    setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal');
      revealEls.forEach(el => this.intersectionObserver?.observe(el));
    }, 100);
  }

  private setupCounterAnimation(): void {
    this.counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.statsAnimated) {
          this.statsAnimated = true;
          this.animateCounters();
          this.counterObserver?.disconnect();
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const statsSection = document.querySelector('.stats-band');
      if (statsSection) this.counterObserver?.observe(statsSection);
    }, 100);
  }

  private animateCounters(): void {
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.stats.forEach(stat => {
        stat.current = Math.round(stat.value * eased);
      });

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(tick);
      } else {
        this.stats.forEach(stat => stat.current = stat.value);
      }
    };

    this.animationFrameId = requestAnimationFrame(tick);
  }
}
