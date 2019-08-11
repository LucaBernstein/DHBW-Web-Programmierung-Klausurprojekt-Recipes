import { Injectable } from '@angular/core';
import { Item, GroupBy } from './shopping-item.class';
import { of, Observable } from 'rxjs';
import { sortAndGroupItems, deleteItemAtPosition, findItemPosition, insertItemAfterPositionAndUpdateQuantity } from '../helpers/sortedItemLists'
import { SHOPPING_LIST } from '../helpers/mock-data-items-and-recipes';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    rawItems: Item[] = SHOPPING_LIST;
    sortedAndGroupedItems: (Item | GroupBy)[];

    constructor() { }

    getAllItems(): Observable<(Item | GroupBy)[]> {
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems); // First sort and group items, then return
        return of(this.sortedAndGroupedItems);
    }

    addItemToItemsList(newI: Item) {
        let i = findItemPosition(this.rawItems, newI.name);
        if (i >= 0) { // Item has been found
            insertItemAfterPositionAndUpdateQuantity(this.rawItems, newI, i);
        } else { // We have a new item
            if (!newI.defaultQuantity) { // But only if no default quantity has been set already.
                newI.defaultQuantity = newI.quantity; // A new component's quantity is also set as it's default quantity.
            }
            this.rawItems.push(newI);
        }
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }

    replaceItemInItemsList(newI: Item) {
        this.deleteItem(newI);
        this.addItemToItemsList(newI);
    }

    deleteItem(ing: Item) {
        let i = findItemPosition(this.rawItems, ing.name);
        deleteItemAtPosition(this.rawItems, i);
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }

    bulkRemoveItemsFromList(items: Item[]) {
        items.forEach((i) => {
            let itemPos = findItemPosition(this.rawItems, i.name);
            if (itemPos !== -1) { // Item exists
                this.rawItems[itemPos].quantity -= i.quantity; // Deduct quantity
                if (this.rawItems[itemPos].quantity <= 0) { // No more, or negative quantity
                    this.deleteItem(this.rawItems[itemPos]);
                }
            }
        })
        this.sortedAndGroupedItems = sortAndGroupItems(this.rawItems);
    }

}
