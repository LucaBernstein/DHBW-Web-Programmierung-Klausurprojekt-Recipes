import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from './../recipe.service'
import { of } from 'rxjs';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

    recipe: Recipe;
    dataSource;
    displayedColumns = ['name', 'quantity', 'unit'];

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router
    ) { }

    ngOnInit() {
        // Get URL parameter for current recipe
        this.route.paramMap.subscribe(params => {
            this.recipe = this.recipeService.findById(parseInt(params.get("recipeId")));
        })
        this.dataSource = of(this.recipe.ingredients);
    }

    editRecipe() {
        this.router.navigate(['recipes', 'edit', this.recipe.id]); // Go to recipes overview page after deletion of the recipe
    }

}
