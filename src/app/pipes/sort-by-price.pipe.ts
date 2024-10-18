import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  pure: false
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: 'asc' | 'desc' = 'asc'): any[] {
    if (!products || products.length === 0) {
      return products; // Si aucun produit, retourne le tableau tel quel
    }

    return products.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price; // Tri croissant par prix
      } else if (order === 'desc') {
        return b.price - a.price; // Tri décroissant par prix
      }
      return 0; // Si l'ordre n'est pas défini (par sécurité)
    });
  }
}