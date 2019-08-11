import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.class';
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from './../recipe.service'
import { of } from 'rxjs';
import { ShoppingListService } from 'src/app/shopping/shopping-list.service';
import { MatSnackBar } from '@angular/material';
import { Item } from 'src/app/shopping/shopping-item.class';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

    recipe: Recipe;

    // Grouped-Table-related variables
    dataSource;
    displayedColumns = ['name', 'quantity', 'unit'];

    lastAddedIngredientsToShoppingList; // For undo-operation to know, what to remove.

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router,
        private shoppingListService: ShoppingListService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        // Get URL parameter for current recipe
        this.route.paramMap.subscribe(params => {
            this.recipe = this.recipeService.findById(parseInt(params.get("recipeId")));
        })
        if (this.recipe === null) {
            this.router.navigate(['404-not-found']); // Redirect to /404 if recipe is not found at given ID
        }
        this.dataSource = of(this.recipe.ingredients);
    }

    editRecipe() {
        this.router.navigate(['recipes', 'edit', this.recipe.id]); // Go to recipes overview page after deletion of the recipe
    }

    deleteRecipe(event, recipe) {
        this.recipeService.deleteFromRecipes(recipe.id);
        this.router.navigate(['recipes']); // Go to recipes overview page after deletion of the recipe
    }

    addIngredientsToShoppingCart(recipe: Recipe) {
        this.lastAddedIngredientsToShoppingList = recipe.ingredients;
        recipe.ingredients.forEach(element => {
            this.shoppingListService.addItemToItemsList(new Item(element)); // Copy added items to not muddle with same object on removal
        });
        this.displaySnackbarForInfoAndUndo();
    }

    undoAddIngredientsToShoppingList() {
        // If user clicks "Undo" on snackbar, do accordingly and remove ingredients from shopping list again.
        this.shoppingListService.bulkRemoveItemsFromList(this.lastAddedIngredientsToShoppingList)
    }

    displaySnackbarForInfoAndUndo() {
        // Snackbar-related-variables
        let snackbarDurationInSeconds = 5;
        let snackbarText = 'Zur Einkaufsliste hinzugefügt.';
        let snackbarAction = 'Rückgängig machen';

        this._snackBar.open(snackbarText, snackbarAction, {
            duration: snackbarDurationInSeconds * 1000,
        }).onAction().subscribe(() => this.undoAddIngredientsToShoppingList());
    }

}
