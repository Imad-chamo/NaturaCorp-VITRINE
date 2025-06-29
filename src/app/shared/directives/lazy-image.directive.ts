import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnInit {
  @Input() appLazyImage!: string;
  @Input() alt: string = '';

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setupLazyLoading();
  }

  private setupLazyLoading() {
    const img = this.el.nativeElement;
    
    // Ajouter loading="lazy" pour le lazy loading natif
    this.renderer.setAttribute(img, 'loading', 'lazy');
    
    // Définir l'alt
    if (this.alt) {
      this.renderer.setAttribute(img, 'alt', this.alt);
    }

    // Créer un placeholder
    const placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMmY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+';
    
    // Définir le placeholder
    this.renderer.setAttribute(img, 'src', placeholder);

    // Observer l'intersection
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage();
            observer.unobserve(img);
          }
        });
      });

      observer.observe(img);
    } else {
      // Fallback pour les navigateurs plus anciens
      this.loadImage();
    }
  }

  private loadImage() {
    const img = this.el.nativeElement;
    
    // Créer une nouvelle image pour précharger
    const tempImage = new Image();
    
    tempImage.onload = () => {
      this.renderer.setAttribute(img, 'src', this.appLazyImage);
      this.renderer.addClass(img, 'loaded');
    };
    
    tempImage.onerror = () => {
      // Gérer l'erreur de chargement
      this.renderer.addClass(img, 'error');
    };
    
    tempImage.src = this.appLazyImage;
  }
} 