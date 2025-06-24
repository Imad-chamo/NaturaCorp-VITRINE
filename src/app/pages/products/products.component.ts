import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  faq = [
    {
      question: "À qui s'adresse MushBlue ?",
      answer: "MushBlue est destiné aux adultes souhaitant renforcer naturellement leur énergie et leur immunité, quel que soit leur mode de vie.",
      open: true
    },
    {
      question: "Comment prendre ce complément ?",
      answer: "Prendre 1 cuillère par jour pendant 30 jours, de préférence le matin.",
      open: false
    },
    {
      question: "Y a-t-il des effets secondaires ?",
      answer: "Aucun effet secondaire n'a été rapporté pour une utilisation conforme. Consultez un professionnel de santé en cas de doute.",
      open: false
    },
    {
      question: "Peut-on l'acheter en pharmacie ?",
      answer: "MushBlue n'est pas encore disponible en pharmacie. Il est disponible uniquement sur notre site.",
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faq[index].open = !this.faq[index].open;
  }
}

