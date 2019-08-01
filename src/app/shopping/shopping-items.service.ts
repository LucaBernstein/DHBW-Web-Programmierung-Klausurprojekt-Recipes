import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RecipeIngredient, Recipe } from '../recipe/recipe.class';

export interface GroupBy {
    category: string;
    isGroupBy: boolean;
}

export class ShoppingItem {
    name: string;
    unit: string;
    defaultQuantity?: number;
    category: string = ''; // Make all items uncategorized by default
}

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
        'Electronical devices'
    ]

    rawItems: (ShoppingItem)[] = [
        { name: 'Flour', unit: 'grams', defaultQuantity: 500, category: 'Cooking Ingredients' },
        { name: 'Sugar', unit: 'grams', defaultQuantity: 50, category: 'Cooking Ingredients' },
        { name: 'Apples', unit: 'pcs', defaultQuantity: 1, category: 'Fruits' },
        { name: 'Cooking for Dummies', unit: 'pcs', defaultQuantity: 1, category: 'Books' },
        { name: 'Salt', unit: 'tbs', defaultQuantity: 1, category: 'Cooking Ingredients' },
    ];

    sortedAndGroupedItems: (ShoppingItem | GroupBy)[] = [];

    constructor() {
        this.sortAndGroupItems();
    }

    sortAndGroupItems() {
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
            }
            previousItem = element;
        });

        this.sortedAndGroupedItems = [...tempResultItems]; // Write back sorted array.
    }

    getAllItems() {
        this.sortAndGroupItems(); // First sort and group items, then return
        return of(this.sortedAndGroupedItems);
    }

    insertIntoOrUpdateItems(newItem: ShoppingItem) {
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
            console.log(this.rawItems);
            this.sortAndGroupItems();
        })
    }
}
