import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from './../recipe.service'

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

    recipe: Recipe;
    animal: any;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.recipe = this.recipeService.findById(params.get("recipeId"));
        })
    }

}
