import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../shopping-items.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AddDialogComponent } from 'src/app/generic-components/ingredients/add-dialog/add-dialog.component';
import { RecipeIngredient } from 'src/app/recipe/recipe.class';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

    constructor(
        private shoppingItemsService: ShoppingItemsService,
        public dialog: MatDialog
    ) { }

    ingredients;
    dataSource;

    displayedColumns: string[] = ['name', 'defaultQuantity', 'unit', 'delete'];

    ngOnInit() {
        this.refreshTable();
    }

    refreshTable() {
        this.shoppingItemsService.getAllItems().subscribe(e => this.ingredients = e);
        this.dataSource = new MatTableDataSource(this.ingredients);

        // The following two lines are a workaround to some kind of bug: Before, Ingredients were not added to the table instantly
        // Thx to: https://stackoverflow.com/questions/47581267/how-to-add-data-dynamically-to-mat-table-datasource
        // TODO: Investigate if this could not be solved otherwise.
        let data = this.dataSource.data;
        this.dataSource.data = data;
    }

    addIngredient() {
        // TODO: Avoid duplicate from recipe add-ingredient!
        const dialogRef = this.dialog.open(AddDialogComponent, {
            //     width: '250px',
            data: { message: 'Add an ingredient', suggestions: true, recipeItem: new RecipeIngredient(null), onlyAddIngredient: true }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log(result);
                this.shoppingItemsService.addIngredientToIngredientsList(result);
                this.refreshTable();
                this.refreshTable();
            }
        });
    }

}
