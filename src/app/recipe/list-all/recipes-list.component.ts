import { Component, OnInit } from '@angular/core';
import { RECIPIES } from './../mock-recipies'
import { Recipe } from '../recipe.class';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
    // TODO: Use recipe service
    recipies = RECIPIES;

    constructor() { }

    ngOnInit() {
    }

    selectedRecipe: Recipe;
    onSelect(recipe: Recipe): void {
        this.selectedRecipe = recipe;
    }

}
