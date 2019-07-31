import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipe/list-all/recipes-list.component';
import { RecipesEditNewComponent } from './recipe/edit/recipes-edit-new.component';
import { RecipeDetailsComponent } from './recipe/show/recipe-details.component';


const routes: Routes = [
    { path: 'recipes', component: RecipesListComponent }, // List all recipes in card style
    { path: 'recipes/:recipeId', component: RecipeDetailsComponent }, // Show details of specific recipe
    { path: 'recipes/add', component: RecipesEditNewComponent }, // Add a new recipe
    { path: 'recipes/edit/:recipeId', component: RecipesEditNewComponent }, // Edit an existing recipe (same view as add)

    // { path: 'shopping-lists', component: ShoppingListsComponent },
    // { path: 'shopping-lists/items', component: ShoppingItemsComponent },
    // { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
