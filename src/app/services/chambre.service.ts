import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Dynamically set the API URL based on the environment
    this.apiUrl = window.location.hostname === 'localhost'
      ? 'http://localhost:8083/Foyer/chambre'  // For local development
      : 'http://app-foyer:8089/Foyer/chambre';  // For containerized environment
  }

  getAllChambres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/findAll`);
  }

  addChambre(chambre: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addOrUpdate`, chambre);
  }
}
