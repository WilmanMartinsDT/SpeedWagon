import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  zones = [
    { name: 'Sunlight Zone', desc: 'Up to 200m. Sunlight reaches here and marine life is abundant.' },
    { name: 'Twilight Zone', desc: '200-1000m. Low light, bioluminescent creatures.'},
    { name: 'Midnight Zone', desc: '1000-4000m. Complete darkness, extreme pressure.'},
    { name: 'Abyssal Zone', desc: '4000-6000m. Absolute cold and unknown creatures.' },
    { name: 'Hadal Zone', desc: 'Over 6000m. The deepest trenches on the planet.'},
    { name: 'Gallery', desc: 'Discover the most amazing creatures of the deep ocean.'},
  ];
}
