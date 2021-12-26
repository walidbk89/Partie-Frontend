import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private service: ArticlesService, private router: Router,
               private notifyService : NotificationService) { }
  
  articles: any;
  ngOnInit(): void {
    this.refreshListArticles()
  }

  refreshListArticles() { 
    this.service.listArticles().subscribe( 
      response => { this.articles = response; } ); 
    }
    deleteArticle(myObj) {
      //console.log(this.provider); 
      this.service.deleteArticle(myObj).subscribe(
        response => {
          console.log(response);
          this.refreshListArticles();
          this.notifyService.showError("Le Produit a été supprimé avec success", "Warning");
        })
    }
  
    updateArticle(article){
      this.router.navigate(['updateProduit' + '/' + article['id']]);
    }
  

}
