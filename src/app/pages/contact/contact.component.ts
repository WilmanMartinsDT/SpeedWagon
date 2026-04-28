import {Component, HostListener, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    ContactComponent
  ]
})
export class AppModule {}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form = {
    name: '',
    email: '',
    topic: '',
    date: '',
    message: '',
    newsletter: false
  };

  lastScrollTop = 0;
  navbarHidden = false;

  onSubmit() {
    console.log('Form data:', this.form);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.navbarHidden = scrollTop > this.lastScrollTop;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
