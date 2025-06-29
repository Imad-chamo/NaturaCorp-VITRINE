import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  constructor() {}

  /**
   * Stocke une valeur dans le cache
   */
  set(key: string, data: any, ttl: number = 300000): void { // 5 minutes par défaut
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  /**
   * Récupère une valeur du cache
   */
  get(key: string): any | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Vérifier si l'élément a expiré
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  /**
   * Supprime une clé du cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Vide tout le cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Vérifie si une clé existe dans le cache
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * Retourne la taille du cache
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Nettoie les éléments expirés du cache
   */
  cleanup(): void {
    const now = Date.now();
    
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Cache avec localStorage pour la persistance
   */
  setPersistent(key: string, data: any, ttl: number = 86400000): void { // 24 heures par défaut
    try {
      const item = {
        data,
        timestamp: Date.now(),
        ttl
      };
      localStorage.setItem(`cache_${key}`, JSON.stringify(item));
    } catch (error) {
      console.warn('Impossible de sauvegarder dans localStorage:', error);
    }
  }

  /**
   * Récupère depuis localStorage
   */
  getPersistent(key: string): any | null {
    try {
      const itemStr = localStorage.getItem(`cache_${key}`);
      
      if (!itemStr) {
        return null;
      }

      const item = JSON.parse(itemStr);
      
      // Vérifier si l'élément a expiré
      if (Date.now() - item.timestamp > item.ttl) {
        localStorage.removeItem(`cache_${key}`);
        return null;
      }

      return item.data;
    } catch (error) {
      console.warn('Impossible de récupérer depuis localStorage:', error);
      return null;
    }
  }

  /**
   * Supprime depuis localStorage
   */
  deletePersistent(key: string): boolean {
    try {
      localStorage.removeItem(`cache_${key}`);
      return true;
    } catch (error) {
      console.warn('Impossible de supprimer depuis localStorage:', error);
      return false;
    }
  }
} 