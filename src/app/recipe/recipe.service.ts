import { Injectable } from '@angular/core';

import { Recipe } from './recipe.class';
import { RECIPIES } from './mock-recipies'

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipes: Recipe[] = RECIPIES;

    constructor() { }

    getAll(): Recipe[] {
        return this.recipes;
    }

    // Find mock recipe by ID.
    public findById(id: string): Recipe | null {
        // TODO: Make this beautiful / lodash?
        let finding = null;
        this.recipes.forEach(element => {
            if (element.id === id) {
                finding = element;
            }
        });
        return finding;
    }

}
