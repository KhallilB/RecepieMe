import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
