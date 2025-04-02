import { Component } from '@angular/core';
import { ChambreService } from '../../services/chambre.service';

@Component({
  selector: 'app-ajout-chambre',
  templateUrl: './ajout-chambre.component.html',
  styleUrls: ['./ajout-chambre.component.css']
})
export class AjoutChambreComponent {

  chambre = {
    numeroChambre: null,
    typeC: ''
  };

  typesChambres = ['SIMPLE', 'DOUBLE', 'SUITE']; // Enum TypeChambre

  constructor(private chambreService: ChambreService) {}

  ajouterChambre() {
    this.chambreService.addChambre(this.chambre).subscribe(response => {
      console.log('Chambre ajoutée:', response);
    }, error => {
      console.error('Erreur:', error);
    });
  }

}
