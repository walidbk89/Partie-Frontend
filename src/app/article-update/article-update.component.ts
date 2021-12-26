import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

  constructor(private service: ArticlesService, private router: Router, private route: ActivatedRoute 
    , private notifyService : NotificationService) { }
 
  private articleToUpdate;
  public idA;
  public code;
  public marque;
  public modele;
  public prix;
  public qte;
  public provider;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.idA = params.get('id');
      }
    );

    this.articleToUpdate = this.service.getArticle(this.idA).subscribe(
      response => {
        
        this.provider = response["provider"];
        this.code = response["code"];
        this.marque = response["marque"];
        this.modele = response["modele"];
        this.prix = response["prix"];
        this.qte = response["qte"];
      }
    );
  }

  updateArticle() {
    this.articleToUpdate = {
      'idA': this.idA,
      'code': this.code,
      'marque': this.marque,
      'modele': this.modele,
      'prix': this.prix,
      'qte': this.qte,
      'provider': this.provider
    }
    this.service.updateArticle(this.articleToUpdate).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listProduit']);
        this.notifyService.showInfo("Le Produit a été modifié avec success", "Info") 
      }
    );

  }
}
