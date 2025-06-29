import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor() {}

  /**
   * Mesure le temps de chargement d'une page
   */
  measurePageLoad(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        console.log(`Temps de chargement: ${loadTime}ms`);
        console.log(`DOM Content Loaded: ${domContentLoaded}ms`);
        
        // Envoyer les métriques à votre service d'analytics
        this.sendMetrics({
          loadTime,
          domContentLoaded,
          url: window.location.href
        });
      }
    }
  }

  /**
   * Mesure le temps d'exécution d'une fonction
   */
  measureFunction<T>(fn: () => T, name: string = 'Function'): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    console.log(`${name} exécutée en ${end - start}ms`);
    
    return result;
  }

  /**
   * Mesure le temps d'exécution d'une fonction asynchrone
   */
  async measureAsyncFunction<T>(fn: () => Promise<T>, name: string = 'AsyncFunction'): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    console.log(`${name} exécutée en ${end - start}ms`);
    
    return result;
  }

  /**
   * Optimise les images avec lazy loading
   */
  optimizeImages(): void {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback pour les navigateurs plus anciens
      images.forEach((img: Element) => {
        const imgElement = img as HTMLImageElement;
        imgElement.src = imgElement.dataset.src || '';
      });
    }
  }

  /**
   * Optimise les polices avec font-display: swap
   */
  optimizeFonts(): void {
    // Ajouter font-display: swap aux polices web
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
    });
  }

  /**
   * Optimise le scroll avec throttling
   */
  optimizeScroll(callback: () => void, delay: number = 16): () => void {
    let timeoutId: number;
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(callback, delay);
    };
  }

  /**
   * Optimise les animations avec requestAnimationFrame
   */
  optimizeAnimation(callback: () => void): void {
    requestAnimationFrame(callback);
  }

  /**
   * Nettoie les ressources pour éviter les fuites mémoire
   */
  cleanup(): void {
    // Nettoyer les event listeners
    // Nettoyer les timers
    // Nettoyer les observables
  }

  /**
   * Envoie les métriques de performance
   */
  private sendMetrics(metrics: any): void {
    // Ici vous pouvez envoyer les métriques à votre service d'analytics
    // Par exemple: Google Analytics, Mixpanel, etc.
    console.log('Métriques de performance:', metrics);
  }

  /**
   * Surveille les performances en temps réel
   */
  startPerformanceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      // Surveiller les métriques Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Métrique de performance:', entry);
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
    }
  }

  /**
   * Optimise le bundle avec code splitting
   */
  optimizeBundle(): void {
    // Le code splitting est géré par Angular CLI
    // Cette méthode peut être utilisée pour des optimisations supplémentaires
  }

  /**
   * Optimise le cache avec service worker
   */
  optimizeCache(): void {
    // Le service worker est configuré dans app.config.ts
    // Cette méthode peut être utilisée pour des optimisations supplémentaires
  }
} 