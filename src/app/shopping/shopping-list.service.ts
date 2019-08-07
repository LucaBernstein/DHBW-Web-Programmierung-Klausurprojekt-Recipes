import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    rawItems = [];

    constructor() { }
}
