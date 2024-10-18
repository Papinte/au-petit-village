import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
    {
      image: 'assets/products/Abraracourcix.png',
      title: 'Abraracourcix',
      description: 'Abraracourcix, le chef des irréductibles Gaulois, part à la conquête de nouvelles aventures ! Porté en triomphe par ses deux fidèles serviteurs. Figurine de 25 cm, entièrement réalisée à la main.',
      price: 34,
    },
    {
      image: 'assets/products/Asterix.png',
      title: 'Astérix',
      description: "Astérix, le héros gaulois le plus courageux, revient triomphant de la chasse ! Avec un sanglier sur les épaules, prêt à régaler tout le village. Figurine de 14 cm, réalisée entièrement à la main.",
      price: 14,
    },
    {
      image: 'assets/products/Falbala.png',
      title: 'Falbala',
      description: 'Falbala, la plus belle Gauloise, dans toute sa splendeur ! Cette figurine de 18 cm, entièrement réalisée à la main, capture la grâce et la féminité de ce personnage emblématique.',
      price: 17,
    },
    {
      image: 'assets/products/Obelix.png',
      title: 'Obélix',
      description: "Obélix, le champion du monde de la bouderie, dans toute sa splendeur ! Après avoir été privé de sa potion magique, notre ami Obélix affiche un air de défi qui en ferait pâlir un centurion romain. Cette figurine de 14 cm, entièrement réalisée à la main",
      price: 14,
    },
    {
      image: 'assets/products/Panoramix.png',
      title: 'Panoramix',
      description: 'Panoramix, le sage en promenade. Cette figurine de 12 cm, entièrement réalisée à la main, capture à merveille la sérénité du druide gaulois lors de sa promenade matinale.',
      price: 12,
    },
    {
      image: 'assets/products/Soldat-romain.png',
      title: 'Soldat Romain',
      description: "Le désarroi de la défaite. Ce soldat romain, d'une stature de 10 cm, porte les stigmates d'une énième défaite face aux Gaulois. Sa lance tordue et son bouclier déformé témoignent de la violence des combats.",
      price: 10,
    },
  ];

  constructor() {}

  getProducts(): Observable<any[]> {
    return of(this.products); // Retourne un Observable des produits
  }
}
