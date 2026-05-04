import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {
  private dataUrl = 'assets/data/zones.json';

  constructor(private http: HttpClient) {}

  getZones(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
