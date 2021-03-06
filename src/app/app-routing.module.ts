import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipe/list-all/recipes-list.component';
import { RecipesEditNewComponent } from './recipe/edit/recipes-edit-new.component';
import { RecipeDetailsComponent } from './recipe/show/recipe-details.component';
import { ItemsListComponent } from './shopping/items-list/items-list.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { NotFoundComponent } from './generic-components/not-found/not-found.component';


const routes: Routes = [
    { path: 'recipes', component: RecipesListComponent }, // List all recipes in card style
    { path: 'recipes/:recipeId', component: RecipeDetailsComponent }, // Show details of specific recipe
    { path: 'recipes/edit/:recipeId', component: RecipesEditNewComponent }, // Edit an existing recipe (same view as add)

    { path: 'shopping/list', component: ShoppingListComponent },
    { path: 'shopping/items', component: ItemsListComponent },

    // { path: '/', redirectTo: '/recipes', pathMatch: 'full' } // Home is /recipes
    { path: '', redirectTo: 'recipes', pathMatch: 'full' }, // Home is /recipes

    { path: '**', component: NotFoundComponent } // Redirect all requests that did not match anything before to a 404 NOT FOUND page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
