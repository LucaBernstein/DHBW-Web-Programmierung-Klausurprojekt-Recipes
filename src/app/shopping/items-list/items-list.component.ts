import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../shopping-items.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AddDialogComponent } from 'src/app/generic-components/ingredients/add-dialog/add-dialog.component';
import { Item } from '../shopping-item.class';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

    ingredients;
    dataSource;

    displayedColumns: string[] = ['name', 'defaultQuantity', 'unit', 'edit', 'delete'];

    // Name and Category suggestions
    allIngredientNames;
    allIngredientCategories;

    constructor(
        private shoppingItemsService: ShoppingItemsService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.refreshTable();
    }

    refreshTable() {
        this.shoppingItemsService.getAllItems().subscribe(e => this.ingredients = e);
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

    bindEmitter(event) {
        if (event.eventName === 'delete') {
            this.deleteIngredient(event.item);
        } else if (event.eventName === 'edit') {
            this.editIngredient(event.item);
        } else {
            console.log(`Binding for event '${event.eventName}' not defined yet.`);
        }
    }

    deleteIngredient(ingredient) {
        this.shoppingItemsService.deleteIngredient(ingredient);
        this.refreshTable();
    }

    addIngredient() {
        this.openEditItemDialog(true);
    }

    editIngredient(ingredient) {
        this.openEditItemDialog(false, ingredient);
    }

    openEditItemDialog(addNew: boolean, ingredient?) {
        let item: Item = ingredient ? new Item(ingredient) : new Item(null); // Make copy of item to avoid two-way-binding
        let methodSlug = addNew ? 'hinzufügen' : 'ändern';

        // TODO: Avoid duplicate from recipe add-ingredient!
        const dialogRef = this.dialog.open(AddDialogComponent, {
            //     width: '250px',
            data: {
                message: `Artikel ${methodSlug}`,
                recipeItem: item,
                showDefaultQuantityInsteadOfQtd: true,
                editItem: !addNew,
                options: {
                    name: this.allIngredientNames,
                    category: this.allIngredientCategories
                },
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (!addNew) {// Edit existing, replace values
                    this.shoppingItemsService.replaceItemInItemsList(result);
                } else {
                    this.shoppingItemsService.addIngredientToIngredientsList(result);
                }
                this.refreshTable();
            }
        });
    }

}
