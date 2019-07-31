import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

    recipies: Recipe[];

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipies = this.recipeService.getAll()
    }

}
