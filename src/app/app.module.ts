import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
import { RecipesListComponent } from './recipe/list-all/recipes-list.component';
import { RecipesEditNewComponent } from './recipe/edit/recipes-edit-new.component';
import { RecipeDetailsComponent } from './recipe/show/recipe-details.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipesListComponent,
        RecipesEditNewComponent,
        RecipeDetailsComponent,
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
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
