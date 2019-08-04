import { Component, OnInit, Input } from '@angular/core';
import { ShoppingItemsService } from 'src/app/shopping/shopping-items.service';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'shopping-grouped-table',
    templateUrl: './grouped-table.component.html',
    styleUrls: ['./grouped-table.component.css']
})
export class GroupedTableComponent implements OnInit {

    constructor(private shoppingItemsService: ShoppingItemsService) { }

    ngOnInit() {
    }

    ingredients;

    @Input() dataSource;
    @Input() displayedColumns;

    isGroup(index, item): boolean {
        return item.isGroupBy;
    }

    deleteIngredient(event, ingredient) {
        console.log('Removing ...');
        this.shoppingItemsService.deleteIngredient(ingredient);
        // TODO: CLEAN NEXT PASSAGE: DIRTY WORKAROUND
        // Re-assign data source to force table to reload
        this.shoppingItemsService.getAllItems().subscribe(e => this.ingredients = e);
        this.dataSource = new MatTableDataSource(this.ingredients);
    }

}
