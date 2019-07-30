import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesAddComponent } from './recipes-add/recipes-add.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';


const routes: Routes = [
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipes/add', component: RecipesAddComponent },
    { path: 'shopping-lists', component: ShoppingListsComponent },
    { path: 'shopping-lists/items', component: ShoppingItemsComponent },
    // { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
