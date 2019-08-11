import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.class';
import { AddDialogComponent } from 'src/app/generic-components/ingredients/add-dialog/add-dialog.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ShoppingItemsService } from 'src/app/shopping/shopping-items.service';
import { Location } from '@angular/common';
import { Item } from 'src/app/shopping/shopping-item.class';

const NEW_RECIPE_PARAM = 'new';
const URL_PARAM_RECIPE_ID = 'recipeId';

@Component({
    selector: 'app-recipes-edit-new',
    templateUrl: './recipes-edit-new.component.html',
    styleUrls: ['./recipes-edit-new.component.css']
})
export class RecipesEditNewComponent implements OnInit {

    recipe: Recipe; // We only work on a temp object. Saving persists data, else it is dismissed.
    ingredients: Item[];
    dataSource;
    displayedColumns = ['name', 'quantity', 'unit'];

    // Item and category suggestions
    allIngredientNames;
    allIngredientCategories;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router,
        private dialog: MatDialog,
        private shoppingItemsService: ShoppingItemsService,
        private _location: Location,
    ) { }

    ngOnInit() {
        // Get URL parameter for current recipe
        this.route.paramMap.subscribe(params => {
            // As we are using the same view also for creating new recipes we want to catch that case:
            let recipeIdParam = params.get(URL_PARAM_RECIPE_ID);
            if (recipeIdParam === NEW_RECIPE_PARAM) {
                // Provide new recipe object to fill.
                this.recipe = new Recipe(null);
                this.recipe.id = this.recipeService.getNewRecipeId();
                this.ingredients = [];
            } else {
                let foundRecipe = this.recipeService.findById(parseInt(recipeIdParam));
                if (foundRecipe === null) {
                    this.router.navigate(['404-not-found']); // Redirect to /404 if recipe is not found at given ID
                } else { // Only if recipe has been found by ID
                    // Fill form with data of existing recipe. Copy it so state is not persisted.
                    this.recipe = new Recipe(foundRecipe);
                    this.ingredients = [...this.recipe.ingredients]; // Copy ingredients in temp array.
                }
            }
        });
        this.dataSource = new MatTableDataSource(this.ingredients);

        // Prepare typing suggestions for add/edit dialog
        this.allIngredientNames = [];
        this.allIngredientCategories = [];
        this.shoppingItemsService.getAllItems().subscribe((e) => {
            e.forEach((i) => {
                if (i instanceof Item) {
                    this.allIngredientNames.push(i.name);
                } else if ('isGroupBy' in i && i.isGroupBy) {
                    this.allIngredientCategories.push(i.category);
                }
            })
        });
    }

    saveRecipe() {
        this.recipe.ingredients = this.ingredients; // Persist (modified) ingredients on recipe.
        this.recipeService.saveOrAdd(this.recipe); // Save (or overwrite) recipe
        this.router.navigate(['recipes', this.recipe.id]); // Go to details page after changes have been saved.
        this.shoppingItemsService.addOrCheckAddedIngredientsForIngredientsList(this.recipe);
    }

    addIngredient(): void {
        const dialogRef = this.dialog.open(AddDialogComponent, {
            //     width: '250px',
            data: {
                message: 'Add an ingredient to this recipe',
                suggestions: true,
                recipeItem: new Item(null),
                options: {
                    name: this.allIngredientNames,
                    category: this.allIngredientCategories
                },
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.addIngredientToIngredientsList(result); // Only save to temporary ingredient object

                // The following two lines are a workaround to some kind of bug: Before, Ingredients were not added to the table instantly
                // Thx to: https://stackoverflow.com/questions/47581267/how-to-add-data-dynamically-to-mat-table-datasource
                let data = this.dataSource.data;
                this.dataSource.data = data;
            }
        });
    }

    addIngredientToIngredientsList(newIng: Item) { // Calculate sums for equal ingredients instead of adding both separately
        let found = false;
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === newIng.name) {
                found = true;
                this.ingredients[i].quantity += newIng.quantity;
                break;
            }
        }
        if (!found) {
            this.ingredients.push(newIng);
        }
    }

    cancelEditing() {
        this._location.back(); // Don't save, just go back.
    }

    isFormValid(): boolean {
        return (
            this.recipe.title !== undefined && this.recipe.title.trim().length > 0
        );
    }
}
