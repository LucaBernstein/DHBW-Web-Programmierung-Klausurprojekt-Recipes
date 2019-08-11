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
    displayedColumns: string[] = ['name', 'quantity', 'unit', 'edit', 'delete'];

    constructor(
        private shoppingListService: ShoppingListService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.refreshTable();
    }

    refreshTable() {
        this.shoppingListService.getAllItems().subscribe((e) => { this.ingredients = e; });
        this.dataSource = new MatTableDataSource(this.ingredients);
    }

    openAddItemDialog() {
        this.openEditItemDialog(true);
    }

    bindEmitter(event) {
        if (event.eventName === 'delete') {
            this.deleteItem(event.item);
        } else if (event.eventName === 'edit') {
            this.openEditItemDialog(false, event.item);
        } else {
            console.log(`Binding for event '${event.eventName}' not defined yet.`);
        }
    }

    deleteItem(ingredient) {
        this.shoppingListService.deleteItem(ingredient);
        this.refreshTable();
    }

    openEditItemDialog(addNew: boolean, ingredient?) {
        let item: Item = ingredient ? new Item(ingredient) : new Item(null); // Make copy of item to avoid two-way-binding
        let methodSlug = addNew ? 'hinzufügen' : 'ändern';

        // TODO: Avoid duplicate from recipe add-ingredient!
        const dialogRef = this.dialog.open(AddDialogComponent, {
            //     width: '250px',
            data: {
                message: `Artikel ${methodSlug}`,
                suggestions: true,
                recipeItem: item,
                showDefaultQuantityInsteadOfQtd: false,
                disabledEditFields: !addNew
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (!addNew) {// Edit existing, replace values
                    this.shoppingListService.replaceItemInItemsList(result);
                } else {
                    this.shoppingListService.addItemToItemsList(result);
                }
                this.refreshTable();
            }
        });
    }

}
