import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AddDialogComponent } from 'src/app/generic-components/ingredients/add-dialog/add-dialog.component';
import { Item } from '../shopping-item.class';
import { ShoppingItemsService } from '../shopping-items.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    @Input() ingredients;
    @Input() dataSource;
    displayedColumns: string[] = ['name', 'quantity', 'unit', 'edit', 'delete'];

    // Name and Category suggestions
    allIngredientNames;
    allIngredientCategories;

    constructor(
        private shoppingListService: ShoppingListService,
        private dialog: MatDialog,
        private shoppingItemsService: ShoppingItemsService
    ) { }

    ngOnInit() {
        this.refreshTable();
    }

    refreshTable() {
        this.shoppingListService.getAllItems().subscribe((e) => { this.ingredients = e; });
        this.dataSource = new MatTableDataSource(this.ingredients);

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
                disabledEditFields: !addNew,
                options: {
                    name: this.allIngredientNames,
                    category: this.allIngredientCategories
                },
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
