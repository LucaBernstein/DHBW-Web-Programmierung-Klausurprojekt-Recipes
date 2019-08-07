import { Injectable } from '@angular/core';
import { Item } from './shopping-item.class';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    rawItems: Item[] = [];

    constructor() { }
}
