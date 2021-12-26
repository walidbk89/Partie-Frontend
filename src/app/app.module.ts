import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderAddComponent } from './provider-add/provider-add.component';
import { ProviderUpdateComponent } from './provider-update/provider-update.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    ProviderListComponent,
    ProviderAddComponent,
    ProviderUpdateComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleAddComponent,
    ArticleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
