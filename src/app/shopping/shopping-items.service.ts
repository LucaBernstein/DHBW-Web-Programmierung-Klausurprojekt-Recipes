import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RecipeIngredient, Recipe } from '../recipe/recipe.class';
import { INGREDIENTS } from '../recipe/mock-recipes';
import { ShoppingItem, GroupBy } from './shopping-item.class';

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

    rawItems: (RecipeIngredient | ShoppingItem)[] = INGREDIENTS;

    sortedAndGroupedItems: (ShoppingItem | GroupBy)[] = [];

    constructor() {
        this.sortAndGroupItems();
    }

    sortAndGroupItems() {
        let tempCategories = []; // We calculate the categories dynamically for autofill
        let tempItems = [...this.rawItems]; // Copy Array
        tempItems.sort((e, f) => { // Sort by Category
            return e.category.localeCompare(f.category);
        });

        let tempResultItems = []; // Create temp output array
        let previousItem; // Remember previous item to know where a new category starts.

        tempItems.forEach(element => { // Check if new category started at each item
            if (element.category === '') { // By default all uncategorized items are marked accordingly
                element.category = '*Uncategorized';
            }
            if (previousItem !== undefined && element.category === previousItem.category) {
                tempResultItems.push(element);
            } else { // If a new category begins in the sorted list a header row is introduced.
                tempResultItems.push({ category: element.category, isGroupBy: true });
                tempResultItems.push(element);

                tempCategories.push(element.category);
            }
            previousItem = element;
        });

        this.sortedAndGroupedItems = [...tempResultItems]; // Write back sorted array.
    }

    getAllItems() {
        this.sortAndGroupItems(); // First sort and group items, then return
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
        this.sortAndGroupItems(); // After that produce new sorted array for observing components
        return newItem;
    }

    public addOrCheckAddedIngredients(r: Recipe) {
        r.ingredients.forEach(newIng => {
            let found = false;
            this.rawItems.forEach(e => {
                if (e.name == newIng.name) {
                    found = true;
                    e.unit = newIng.unit;
                }
            })
            if (!found) {
                this.rawItems.push({
                    name: newIng.name,
                    unit: 'grams',
                    defaultQuantity: newIng.quantity,
                    category: newIng.category,
                } as ShoppingItem);
            }
            this.sortAndGroupItems();
        })
    }
}
