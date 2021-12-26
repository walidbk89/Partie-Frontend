import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  article: any;

  urlArticles = environment.rootURL+'api/produits';
  urlProviders = environment.rootURL+'api/categories';

  constructor(private http:HttpClient) { }

  listArticles() { 

   return this.http.get(this.urlArticles + '/list');
   }

   createArticle(myform) {
   
    this.article = {
      'code': myform.value.articleCode,
      'marque': myform.value.articleMarque,
      'modele': myform.value.articleModele,
      'prix': myform.value.articlePrix,
      'qte': myform.value.articleQte,

      'id': myform.value.providerId
    }
    return this.http.post(this.urlArticles + '/add/'+this.article.id, this.article);
  }

  listProviders() {
    return this.http.get(this.urlProviders + '/list');
  }

  deleteArticle(myObj) {

    return this.http.delete(this.urlArticles + '/delete/' + myObj['id'])
  }

  updateArticle(article) {
    return this.http.put(this.urlArticles + '/update/' +'/'+ article.id + article.provider.id ,article );
   }


   getArticle(id) {
    return this.http.get(this.urlArticles + '/' + id)
  }
}
