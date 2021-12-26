import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { ArticlesService } from '../services/articles.service';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  article: any;
  listProvider: any;
  
  constructor(private service: ArticlesService, private serviceProvider: ProvidersService,
         private router: Router, private notifyService : NotificationService) { }

         public id;
         ngOnInit(): void {
           this.refreshListProviders();
        
         }
       
         createArticle(myform) {
           this.service.createArticle(myform).subscribe(
             response => {
               console.log(response);
               this.router.navigate(['listProduit']);
               this.notifyService.showSuccess("Le Produit a été ajouté avec success", "Successfully")
             }
           );
       
       }
       refreshListProviders() {
       this.serviceProvider.listProviders().subscribe(
         response => {
           this.listProvider = response;
         }
       );
       }



}
