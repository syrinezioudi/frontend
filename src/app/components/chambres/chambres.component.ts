import { Component, OnInit } from '@angular/core';
import { ChambreService } from '../../services/chambre.service';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  chambres: any[] = [];

  constructor(private chambreService: ChambreService) {}

  ngOnInit(): void {
    this.chambreService.getAllChambres().subscribe(
      data => {
        this.chambres = data;
        console.log('Chambres récupérées:', this.chambres);
      },
      error => {
        console.error('Erreur lors de la récupération des chambres', error);
      }
    );
  }
}
