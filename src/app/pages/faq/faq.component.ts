import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faq = [
    {
      question: "À qui s'adresse MushBlue ?",
      answer: "MushBlue est destiné aux adultes cherchant un soutien naturel pour leur énergie, leur immunité et leur équilibre général.",
      open: true
    },
    {
      question: "Comment prendre MushBlue ?",
      answer: "Prendre 1 cuillère par jour, de préférence le matin, pendant 30 jours.",
      open: false
    },
    {
      question: "Y a-t-il des effets secondaires ?",
      answer: "Aucun effet secondaire n'a été rapporté pour une utilisation conforme. Consultez un professionnel de santé en cas de doute.",
      open: false
    },
    {
      question: "Où acheter MushBlue ?",
      answer: "MushBlue est disponible uniquement sur notre site internet.",
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faq[index].open = !this.faq[index].open;
  }
} 