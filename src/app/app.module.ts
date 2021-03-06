import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatSnackBarModule, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardModule, MatGridListModule, MatInputModule, MatTableModule, MatDialogModule, MatSnackBar, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { RecipesListComponent } from './recipe/list-all/recipes-list.component';
import { RecipesEditNewComponent } from './recipe/edit/recipes-edit-new.component';
import { RecipeDetailsComponent } from './recipe/show/recipe-details.component';
import { NavbarComponent } from './generic-components/navbar/navbar.component';
import { ItemsListComponent } from './shopping/items-list/items-list.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { GroupedTableComponent } from './generic-components/ingredients/grouped-table/grouped-table.component';
import { AddDialogComponent } from './generic-components/ingredients/add-dialog/add-dialog.component';
import { NotFoundComponent } from './generic-components/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipesListComponent,
        RecipesEditNewComponent,
        RecipeDetailsComponent,
        NavbarComponent,
        ItemsListComponent,
        ShoppingListComponent,
        GroupedTableComponent,
        AddDialogComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        MatSnackBarModule,
        MatAutocompleteModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [AddDialogComponent]
})
export class AppModule { }
