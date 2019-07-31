import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

    recipes: Recipe[];

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.getAll().subscribe(e => this.recipes = e);
    }

    deleteRecipe(event, recipe) {
        this.recipeService.deleteFromRecipes(recipe.id);
    }

}
