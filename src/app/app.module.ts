import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesAddComponent } from './recipes-add/recipes-add.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        RecipesAddComponent,
        ShoppingListsComponent,
        ShoppingItemsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
