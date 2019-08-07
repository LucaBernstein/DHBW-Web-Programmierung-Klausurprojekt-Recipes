import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AddDialogComponent } from 'src/app/generic-components/ingredients/add-dialog/add-dialog.component';
import { Item } from '../shopping-item.class';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    @Input() ingredients;
    @Input() dataSource;
    displayedColumns: string[] = ['name', 'quantity', 'unit', 'delete'];

    // TODO: Inject delete method from here.

    constructor(
        private shoppingListService: ShoppingListService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.refreshTable();
    }

    refreshTable() {
        this.shoppingListService.getAllItems().subscribe(e => this.ingredients = e);
        this.dataSource = new MatTableDataSource(this.ingredients);

        // Workaround to no refreshing. See comment in #/app/shopping/shopping-list.component.ts
        let data = this.dataSource.data;
        this.dataSource.data = data;
    }

    addItem() {
        // TODO: Avoid duplicate from recipe add-ingredient!
        const dialogRef = this.dialog.open(AddDialogComponent, {
            //     width: '250px',
            data: { message: 'Add an item', suggestions: true, recipeItem: new Item(null), onlyAddIngredient: true }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log(result);
                this.shoppingListService.addItemToItemsList(result);
                this.refreshTable();
            }
        });
    }

    bindEmitter(event) {
        if (event.eventName === 'delete') {
            this.deleteItem(event.item);
        } else {
            console.log(`Binding for event '${event.eventName}' not defined yet.`);
        }
    }

    deleteItem(ingredient) {
        this.shoppingListService.deleteItem(ingredient);
        this.refreshTable();
    }

}
