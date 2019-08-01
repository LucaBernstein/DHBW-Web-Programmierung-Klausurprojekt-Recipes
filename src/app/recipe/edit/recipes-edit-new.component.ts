import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe, RecipeIngredient } from '../recipe.class';
import { AddDialogComponent } from 'src/app/generic-components/ingredients/add-dialog/add-dialog.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ShoppingItemsService } from 'src/app/shopping/shopping-items.service';
import { of, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
    selector: 'app-recipes-edit-new',
    templateUrl: './recipes-edit-new.component.html',
    styleUrls: ['./recipes-edit-new.component.css']
})
export class RecipesEditNewComponent implements OnInit {

    recipe: Recipe;
    dataSource;
    displayedColumns = ['name'];

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router,
        public dialog: MatDialog,
        private shoppingItemsService: ShoppingItemsService,
    ) { }

    ngOnInit() {
        this.route.fragment
        // Get URL parameter for current recipe
        this.route.paramMap.subscribe(params => {
            // As we are using the same view also for creating new recipes we want to catch that case:
            let recipeIdParam = params.get("recipeId");
            if (recipeIdParam === 'new') { // TODO: Extract magic string
                // Provide new recipe object to fill.
                this.recipe = new Recipe(null);
                this.recipeService.getNewRecipeId();
            } else {
                // Fill form with data of existing recipe.
                this.recipe = this.recipeService.findById(parseInt(recipeIdParam)) as Recipe;
            }
        });
        // this.dataSource = of(this.recipe);
        // const data = this.dataSource.data;
        // data.push(event);
        // this.dataSource.data = data;
        this.dataSource = new MatTableDataSource(this.recipe.ingredients);
        console.log(this.recipe);
    }

    saveRecipe() {
        this.recipeService.saveOrAdd(this.recipe); // Save (or overwrite) recipe
        this.router.navigate(['recipes', this.recipe.id]); // Go to details page after changes have been saved.
        this.shoppingItemsService.addOrCheckAddedIngredients(this.recipe);
    }

    deleteRecipe(event, recipe) {
        this.recipeService.deleteFromRecipes(recipe.id);
        this.router.navigate(['recipes']); // Go to recipes overview page after deletion of the recipe
    }

    addIngredient(): void {
        const dialogRef = this.dialog.open(AddDialogComponent, {
            //     width: '250px',
            data: { message: 'Add an ingredient to this recipe', suggestions: true, recipeItem: new RecipeIngredient() }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log(JSON.stringify(result));
                this.recipe.addIngredient(result); // Only save to temporary ingredient object

                // The following two lines are a workaround to some kind of bug: Before, Ingredients were not added to the table instantly
                // Thx to: https://stackoverflow.com/questions/47581267/how-to-add-data-dynamically-to-mat-table-datasource
                // TODO: Investigate if this could not be solved otherwise.
                let data = this.dataSource.data;
                this.dataSource.data = data;
            }
        });

    }
}
