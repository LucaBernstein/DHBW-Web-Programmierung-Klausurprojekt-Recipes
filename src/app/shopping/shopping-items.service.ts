import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Recipe } from '../recipe/recipe.class';
import { INGREDIENTS } from '../recipe/mock-recipes';
import { GroupBy, Item } from './shopping-item.class';
import { sortAndGroupItems, deleteItemAtPosition, findItemPosition, insertItemAfterPosition as updateItemAtPosition, calculateCategories } from '../helpers/sortedItemLists'

@Injectable({
    providedIn: 'root'
})
export class ShoppingItemsService {

    // TODO: Add Catrgory to cat view here for selection
    categories: string[];

    // TODO: Use Key-Value-Store instead?
    rawItems: Item[] = INGREDIENTS;
    sortedAndGroupedItems: (Item | GroupBy)[] = [];

    constructor() {
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }

    getAllItems(): Observable<(Item | GroupBy)[]> {
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems); // First sort and group items, then return
        return of(this.sortedAndGroupedItems);
    }

    getAllCategories(): string[] {
        // Lazy calculate categories
        this.categories = calculateCategories(this.sortedAndGroupedItems);
        return this.categories;
    }

    public addOrCheckAddedIngredientsForIngredientsList(r: Recipe) {
        r.ingredients.forEach(newIng => {
            this.addIngredientToIngredientsList(newIng);
        })
    }

    public addIngredientToIngredientsList(newIng: Item) {
        let i = findItemPosition(this.rawItems, newIng.name);
        if (i > 0) { // Item has been found
            updateItemAtPosition(this.rawItems, newIng, i);
        } else { // We have a new item
            if (!newIng.defaultQuantity) { // But only if no default quantity has been set already.
                newIng.defaultQuantity = newIng.quantity; // A new component's quantity is also set as it's default quantity.
            }
            this.rawItems.push(newIng);
        }
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }

    public deleteIngredient(ing: Item) {
        let i = findItemPosition(this.rawItems, ing.name);
        deleteItemAtPosition(this.rawItems, i);
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }
}
