import { Injectable } from '@angular/core';

import { Recipe } from './recipe.class';
import { RECIPES } from './mock-recipes'
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipes = RECIPES;
    private static currentId = 10;

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
        this.recipes.push(r);
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

    public static getNewRecipeId() {
        return RecipeService.currentId++;
    }

}
