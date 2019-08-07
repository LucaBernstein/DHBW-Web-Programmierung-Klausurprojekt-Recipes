import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RecipeIngredient, Recipe } from '../recipe/recipe.class';
import { INGREDIENTS } from '../recipe/mock-recipes';
import { ShoppingItem, GroupBy } from './shopping-item.class';
import { sortAndGroupItems } from './../helpers/sortedLists'

@Injectable({
    providedIn: 'root'
})
export class ShoppingItemsService {

    categories = [
        'Vegetables',
        'Fruits',
        'Cooking Ingredients',
        'Household',
        'Books',
        'Electronical devices',
        'Fresh',
        'Pasta',
        'Cooking-ingredients'
    ]

    // TODO: Add Catrgory to cat view here for selection

    // TODO: Use Key-Value-Store instead?
    rawItems: (RecipeIngredient | ShoppingItem)[] = INGREDIENTS;
    sortedAndGroupedItems: (ShoppingItem | GroupBy)[] = [];

    constructor() {
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }

    getAllItems() {
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems); // First sort and group items, then return
        return of(this.sortedAndGroupedItems);
    }

    insertIntoOrUpdateItems(newItem: ShoppingItem): ShoppingItem {
        // At the moment for simplification it is only allowed to add categories. Then I know that they do not already exist.
        // Maybe in a continued, later version I will add removal as well :)
        // TODO: Add category removal.

        // Check if already exists
        let exists = false;
        this.rawItems.forEach(element => {
            if (element.name === newItem.name) {
                exists = true;
            }
        });
        if (!exists) {

        } else {
            // TODO: What to do now? Update?
        }
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems); // After that produce new sorted array for observing components
        return newItem;
    }

    public addOrCheckAddedIngredientsForIngredientsList(r: Recipe) {
        r.ingredients.forEach(newIng => {
            this.addIngredientToIngredientsList(newIng);
        })
    }

    public addIngredientToIngredientsList(newIng: RecipeIngredient) {
        let found = false;
        this.rawItems.forEach(e => {
            if (e.name == newIng.name) {
                found = true;
                e.unit = newIng.unit;
                // TODO: Do I have to set each unit individually? Why not assign new object in Key-Value-Store?
            }
        })
        if (!found) { // If ingredient not yet exists on list, add it.
            // Set default quantity to qtd if did not exist yet.
            if (!newIng.defaultQuantity) { // But only if no default quantity has been set already.
                newIng.defaultQuantity = newIng.quantity;
            }
            this.rawItems.push(newIng);
        }
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }

    public deleteIngredient(ing: RecipeIngredient) {
        for (let i = 0; i < this.rawItems.length; i++) {
            if (this.rawItems[i].name == ing.name) {
                this.rawItems.splice(i, 1); // Remove that ingredient at the given position.
                break;
            }
        }
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }
}
