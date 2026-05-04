import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ZonesService } from '../../services/zones.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  zones: any[] = [];

  constructor(private zonesService: ZonesService) {}

  ngOnInit() {
    this.zonesService.getZones().subscribe(data => {
      this.zones = data;
    });
  }
}
