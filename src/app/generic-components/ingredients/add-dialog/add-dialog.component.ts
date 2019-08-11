import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-add-dialog',
    templateUrl: './add-dialog.component.html',
    styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

    filteredOptionsName;
    filteredOptionsCategory;
    filterFormControlName = new FormControl();
    filterFormControlCat = new FormControl();

    constructor(
        private dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
        // If user enters data into name or category field, the suggestions are filtered accordingly
        this.filteredOptionsName = this.filterFormControlName.valueChanges
            .pipe(
                startWith(this.filterFormControlName.value),
                map((value) => this._filter(value, 'name'))
            );
        this.filteredOptionsCategory = this.filterFormControlCat.valueChanges
            .pipe(
                startWith(''),
                map((value) => this._filter(value, 'category'))
            );
    }

    onNoClick(): void { // Cancel the dialog
        this.dialogRef.close();
    }

    isFormValid(): boolean {
        return (
            this.data.recipeItem.name !== undefined && this.data.recipeItem.name.trim().length > 0
            // This does not prevent the user from changing a shopping list item's quantity to 0:
            && (this.data.recipeItem.quantity > 0 || this.data.recipeItem.defaultQuantity > 0)
            && this.data.recipeItem.category !== undefined
        );
    }

    private _filter(value: string, group: string): string[] {
        if (value !== null && value !== undefined && value.length >= 0) { // Suggest instantly. Could change here, to how many letters must have been typed before suggesting
            const filterValue = value.toLowerCase();
            if (this.data.options !== undefined && this.data.options[group] !== undefined) { // Make sure list to select from is provided
                return this.data.options[group].filter((option) => option.toLowerCase().includes(filterValue));
            }
        }
        return [];
    }

}
