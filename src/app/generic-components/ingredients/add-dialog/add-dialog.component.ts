import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-add-dialog',
    templateUrl: './add-dialog.component.html',
    styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    isFormValid(): boolean {
        return (
            this.data.recipeItem.name !== undefined && this.data.recipeItem.name.length > 0
            // This does not prevent the user from changing a shopping list item's quantity to 0:
            && (this.data.recipeItem.quantity > 0 || this.data.recipeItem.defaultQuantity > 0)
            && this.data.recipeItem.category !== undefined
        );
    }

}
