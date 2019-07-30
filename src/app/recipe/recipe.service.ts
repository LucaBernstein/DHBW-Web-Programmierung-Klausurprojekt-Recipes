import { Injectable } from '@angular/core';

import { Recipe } from './recipe.class';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private heroes: Recipe[] = [];

    constructor() { }
}
