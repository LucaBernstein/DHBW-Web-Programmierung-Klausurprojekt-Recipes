import { Injectable } from '@angular/core';
import { Item, GroupBy } from './shopping-item.class';
import { of, Observable } from 'rxjs';
import { sortAndGroupItems, deleteItemAtPosition, findItemPosition, insertItemAfterPosition as updateItemAtPosition, calculateCategories } from '../helpers/sortedItemLists'

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    rawItems: Item[] = [];
    sortedAndGroupedItems: (Item | GroupBy)[];
    categories: string[];

    constructor() { }

    getAllItems(): Observable<(Item | GroupBy)[]> {
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems); // First sort and group items, then return
        return of(this.sortedAndGroupedItems);
    }

    getAllCategories(): string[] {
        // Lazy calculate categories
        this.categories = calculateCategories(this.sortedAndGroupedItems);
        return this.categories;
    }

    addItemToItemsList(newI: Item) {

    }

}
