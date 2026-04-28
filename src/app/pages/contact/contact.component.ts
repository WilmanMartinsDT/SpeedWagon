import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  lastScrollTop = 0;

  testimonials = [
    {
      message: "The journey felt unreal. Seeing Earth from above changes you.",
      author: "Liam R."
    },
    {
      message: "Absolutely breathtaking. I still can't believe I experienced this.",
      author: "Sofia M."
    },
    {
      message: "A once in a lifetime experience. Worth every second.",
      author: "Daniel K."
    },
    {
      message: "The launch, the silence, the view… pure magic.",
      author: "Emma L."
    }
  ];

  currentIndex = 0;
  fadeIn = true;
  intervalId: any;

  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.fadeIn = false;

      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.fadeIn = true;
      }, 300);

    }, 4000);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    console.log({
      name: data.get('name'),
      email: data.get('email'),
      topic: data.get('topic'),
      date: data.get('date'),
      message: data.get('message'),
      newsletter: data.get('newsletter') !== null
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.lastScrollTop = scrollTop;
  }
}
