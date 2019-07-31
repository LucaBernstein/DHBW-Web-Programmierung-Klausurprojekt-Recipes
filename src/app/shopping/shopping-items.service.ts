import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface GroupBy {
    category: string;
    isGroupBy: boolean;
}

export interface ShoppingItem {
    name: string;
    unit: string;
    defaultQuantity: number;
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

    shoppingItems: (ShoppingItem | GroupBy)[] = [
        { category: 'Cooking Ingredients', isGroupBy: true },
        { name: 'Flour', unit: 'grams', defaultQuantity: 500 },
        { name: 'Sugar', unit: 'grams', defaultQuantity: 50 },
        { name: 'Salt', unit: 'tbs', defaultQuantity: 1 },
        { category: 'Fruits', isGroupBy: true },
        { name: 'Apples', unit: 'pcs', defaultQuantity: 1 },
    ];

    constructor() { }

    getAllItems() {
        return of(this.shoppingItems);
    }
}
