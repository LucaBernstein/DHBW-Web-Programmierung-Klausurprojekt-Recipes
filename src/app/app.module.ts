import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardModule, MatGridListModule, MatInputModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { RecipesListComponent } from './recipe/list-all/recipes-list.component';
import { RecipesEditNewComponent } from './recipe/edit/recipes-edit-new.component';
import { RecipeDetailsComponent } from './recipe/show/recipe-details.component';
import { NavbarComponent } from './generic-components/navbar/navbar.component';
import { ItemsListComponent } from './shopping/items-list/items-list.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipesListComponent,
        RecipesEditNewComponent,
        RecipeDetailsComponent,
        NavbarComponent,
        ItemsListComponent,
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
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
