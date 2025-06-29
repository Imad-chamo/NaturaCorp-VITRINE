import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPerformance]',
  standalone: true
})
export class PerformanceDirective implements OnInit, OnDestroy {
  @Input() appPerformance: 'lazy' | 'defer' | 'preload' = 'lazy';
  @Input() threshold: number = 0.1;

  private observer?: IntersectionObserver;
  private element: HTMLElement;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.setupPerformanceOptimization();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupPerformanceOptimization() {
    switch (this.appPerformance) {
      case 'lazy':
        this.setupLazyLoading();
        break;
      case 'defer':
        this.setupDeferredLoading();
        break;
      case 'preload':
        this.setupPreloading();
        break;
    }
  }

  private setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.loadContent();
              this.observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: this.threshold,
          rootMargin: '50px'
        }
      );

      this.observer.observe(this.element);
    } else {
      // Fallback pour les navigateurs plus anciens
      this.loadContent();
    }
  }

  private setupDeferredLoading() {
    // Charger le contenu après un délai
    setTimeout(() => {
      this.loadContent();
    }, 100);
  }

  private setupPreloading() {
    // Précharger le contenu immédiatement
    this.loadContent();
  }

  private loadContent() {
    // Ajouter une classe pour indiquer que le contenu est chargé
    this.renderer.addClass(this.element, 'loaded');
    
    // Déclencher un événement personnalisé
    this.element.dispatchEvent(new CustomEvent('contentLoaded', {
      bubbles: true,
      detail: { element: this.element }
    }));
  }
} 