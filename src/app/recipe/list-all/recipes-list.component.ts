import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping/shopping-list.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css'],
    animations: [
        // the fade-in/fade-out animation.
        trigger('simpleFadeAnimation', [

            // the "in" style determines the "resting" state of the element when it is visible.
            state('in', style({})),

            // fade in when created. this could also be written as transition('void => *')
            transition(':enter', [
                style({ backgroundColor: '#673ab7' }),
                animate(600)
            ]),

            // fade out when destroyed. this could also be written as transition('void => *')
            transition(':leave',
                animate(600, style({ opacity: 0 }))
            )
        ])
    ]
})
export class RecipesListComponent implements OnInit {

    recipes: Recipe[];

    constructor(
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.recipeService.getAll().subscribe(e => this.recipes = e);
    }

    deleteRecipe(event, recipe) {
        this.recipeService.deleteFromRecipes(recipe.id);
    }

}
