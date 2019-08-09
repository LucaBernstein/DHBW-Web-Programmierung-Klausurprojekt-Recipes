import { Injectable } from '@angular/core';

import { RECIPES } from '../helpers/mock-data'
import { of, Observable } from 'rxjs';
import { Recipe } from './recipe.class';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipes = RECIPES;
    private static currentId = 10; // new recipe ID counter

    constructor() { }

    getAll(): Observable<Recipe[]> {
        return of(this.recipes);
    }

    get(id: number): Observable<Recipe> {
        return of(this.findById(id));
    }

    // Find mock recipe by ID.
    public findById(id: number): Recipe {
        // TODO: Make this beautiful / lodash?
        let finding = null;
        this.recipes.forEach(element => {
            if (element.id === id) {
                finding = element;
            }
        });
        return finding;
    }

    public saveOrAdd(r: Recipe) {
        this.deleteFromRecipes(r.id);
        this.recipes.splice(0, 0, r); // Append modified / created recipe to the beginning of the list to see it right at the top of the recipies.
    }

    public deleteFromRecipes(id: number) {
        let position = null;
        for (let i = 0; i < this.recipes.length; i++) {
            if (this.recipes[i].id === id) {
                position = i;
                break;
            }
        }
        if (position !== null) {
            this.recipes.splice(position, 1);
        }
    }

    public getNewRecipeId() {
        return RecipeService.currentId++;
    }

}
