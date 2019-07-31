import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.class';

@Component({
    selector: 'app-recipes-edit-new',
    templateUrl: './recipes-edit-new.component.html',
    styleUrls: ['./recipes-edit-new.component.css']
})
export class RecipesEditNewComponent implements OnInit {

    recipe: Recipe;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

    ngOnInit() {
        // Get URL parameter for current recipe
        this.route.paramMap.subscribe(params => {
            // As we are using the same view also for creating new recipes we want to catch that case:
            let recipeIdParam = params.get("recipeId");
            if (recipeIdParam === 'add') { // TODO: Extract magic string
                // Provide new recipe object to fill.
                this.recipe = new Recipe();
            } else {
                // Fill form with data of existing recipe.
                this.recipe = this.recipeService.findById(recipeIdParam);
            }
        })
    }

}
