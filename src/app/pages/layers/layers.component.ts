import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layers.component.html',
  styleUrl: './layers.component.css'
})
export class LayersComponent {

  layers = [
    {
      name: 'Sunlight Zone',
      depth: '0m - 200m',
      description: 'The only zone where sunlight penetrates, allowing photosynthesis and abundant marine life.',
      class: 'sunlight'
    },
    {
      name: 'Twilight Zone',
      depth: '200m - 1000m',
      description: 'Dim light, mysterious creatures begin to appear.',
      class: 'twilight'
    },
    {
      name: 'Midnight Zone',
      depth: '1000m - 4000m',
      description: 'Total darkness. Bioluminescent life dominates.',
      class: 'midnight'
    },
    {
      name: 'Abyssal Zone',
      depth: '4000m - 6000m',
      description: 'Extreme pressure and freezing temperatures.',
      class: 'abyss'
    },
    {
      name: 'Hadal Zone',
      depth: '6000m+',
      description: 'The deepest and most hostile part of the ocean.',
      class: 'hadal'
    }
  ];

}
