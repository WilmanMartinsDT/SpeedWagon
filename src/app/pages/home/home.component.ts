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
    { name: 'Sunlight Zone', desc: 'Hasta 200m. Aquí llega la luz solar y abunda la vida marina.' },
    { name: 'Twilight Zone', desc: '200-1000m. Poca luz, criaturas bioluminiscentes.'},
    { name: 'Midnight Zone', desc: '1000-4000m. Oscuridad total, presión extrema.'},
    { name: 'Abyssal Zone', desc: '4000-6000m. Frío absoluto y criaturas desconocidas.' },
    { name: 'Hadal Zone', desc: 'Más de 6000m. Las fosas más profundas del planeta.'},
    { name: 'Galería', desc: 'Descubre las criaturas más sorprendentes del océano profundo.'},
  ];
}
