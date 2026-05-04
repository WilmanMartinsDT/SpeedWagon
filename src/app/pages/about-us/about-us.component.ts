import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'Wilman',
      role: 'Leader',
      bio: 'Passionate about the ocean and web development. Responsible for the Angular architecture of the project.',
      icon: 'bi-person-circle'
    },
    {
      name: 'Ken',
      role: 'Developer',
      bio: 'Focused on building dynamic components and connecting data services throughout the project.',
      icon: 'bi-person-circle'
    },
    {
      name: 'Sara',
      role: 'Designer & Developer',
      bio: 'Responsible for the visual identity and user experience of the Speed Wagon platform.',
      icon: 'bi-person-circle'
    },
    {
      name: 'SpeedWagon Team',
      role: 'Development & Design',
      bio: 'A dedicated team exploring the depths of the ocean through technology and design.',
      icon: 'bi-people-fill'
    }
  ];
}
