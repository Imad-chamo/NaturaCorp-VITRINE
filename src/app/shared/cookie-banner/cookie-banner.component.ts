import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;

  ngOnInit() {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (!cookieChoice) {
      this.showBanner = true;
    }
  }

  acceptCookies() {
    localStorage.setItem('cookieChoice', 'accepted');
    localStorage.setItem('cookieDate', new Date().toISOString());
    this.showBanner = false;
    
    // Ici vous pouvez ajouter le code pour activer les cookies
    console.log('Cookies acceptés');
  }

  refuseCookies() {
    localStorage.setItem('cookieChoice', 'refused');
    localStorage.setItem('cookieDate', new Date().toISOString());
    this.showBanner = false;
    
    // Ici vous pouvez ajouter le code pour désactiver les cookies
    console.log('Cookies refusés');
  }

  openCookieSettings() {
    // Ouvrir une modal ou rediriger vers la page de paramètres des cookies
    console.log('Ouvrir les paramètres des cookies');
  }
} 