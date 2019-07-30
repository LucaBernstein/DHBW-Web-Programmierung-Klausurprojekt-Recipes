import { Injectable } from '@angular/core';

import { Recipe } from './recipe.class';
import { RECIPIES } from './mock-recipies'

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipes: Recipe[] = RECIPIES;

    constructor() { }

    public findById(id: string): Recipe | null {
        console.log(id);
        // TODO: Make this beautiful / lodash?
        let finding = null;
        this.recipes.forEach(element => {
            console.log(element, id)
            if (element.id === id) {
                finding = element;
            }
        });
        return finding;
    }
}
