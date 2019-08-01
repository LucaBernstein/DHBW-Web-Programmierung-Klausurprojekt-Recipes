import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeIngredient } from 'src/app/recipe/recipe.class';

@Component({
    selector: 'app-add-dialog',
    templateUrl: './add-dialog.component.html',
    styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: RecipeIngredient) { }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
