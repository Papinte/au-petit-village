import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
    {
      image: 'assets/products/Abraracourcix.png',
      title: 'Abraracourcix',
      description:
        'Figurine représentant Abraracourcix trônant fièrement sur son bouclier, *soutenu par ses deux fidèles serviteurs.Pièce unique de 16 cm, entièrement sculptée et peinte à la main.',
      price: 34,
    },
    {
      image: 'assets/products/Asterix.png',
      title: 'Astérix',
      description:
        "Figurine représentant Astérix, le célèbre Gaulois, revenant de la chasse, un sanglier sur l'épaule. Pièce unique de 12 cm, entièrement sculptée et peinte à la main.",
      price: 14,
    },
    {
      image: 'assets/products/Falbala.png',
      title: 'Falbala',
      description:
        'Figurine représentant Falbala, la belle et coquette Gauloise, dans une pose élégante. Pièce unique de 17 cm, entièrement sculptée et peinte à la main.',
      price: 17,
    },
    {
      image: 'assets/products/Obelix.png',
      title: 'Obélix',
      description:
        "Figurine d'Obélix boudeur, privé de potion magique. Pièce unique de 12 cm, entièrement sculptée et peinte à la main.",
      price: 14,
    },
    {
      image: 'assets/products/Panoramix.png',
      title: 'Panoramix',
      description:
        'Figurine de Panoramix se promenant joyeusement en forêt. Pièce unique de 10 cm, entièrement sculptée et peinte à la main.',
      price: 12,
    },
    {
      image: 'assets/products/Soldat-romain.png',
      title: 'Soldat Romain',
      description:
        "Figurine d'un soldat romain, défait et abattu, après une énième confrontation avec les Gaulois. Pièce unique de 8 cm, entièrement sculptée et peinte à la main.",
      price: 10,
    },
  ];

  constructor() {}
  getProducts() {
    return this.products;
  }
}
