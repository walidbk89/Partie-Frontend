import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';


const routes: Routes = [

  { path: "", pathMatch: "full", redirectTo: "app-navbar" },

  {path:"addCategorie", component:ProviderAddComponent},
  {path:"listCategorie", component:ProviderListComponent},
  {path:"updateCategorie/:id", component:ProviderUpdateComponent},

  {path:"listProduit", component:ArticleListComponent},
  {path:"addProduit", component:ArticleAddComponent},
  {path:"updateProduit/:id", component:ArticleUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
