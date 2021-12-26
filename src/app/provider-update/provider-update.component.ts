import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { Router , ActivatedRoute} from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.css']
})
export class ProviderUpdateComponent implements OnInit {

  public id; 
  private providerToUpdate; 
  public code; 
  public libelle; 

  constructor(private service: ProvidersService, private router: Router, 
                private route: ActivatedRoute, private notifyService : NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      params => { this.id = params.get('id'); } 
      );
    this.providerToUpdate = this.service.getProvider(this.id).subscribe( response => { 
      //console.log(response); 
      this.code = response["code"]; 
      this.libelle = response["libelle"];  } );
  }

  updateProvider() { 
    this.providerToUpdate = { 
      'code': this.code, 
      'libelle': this.libelle, 
      'id': this.id } 
      
      this.service.updateProvider(this.providerToUpdate).subscribe( 
        response => { console.log(response); 
          this.router.navigate(['listCategorie']);
          this.notifyService.showInfo("La Categorie a été modifié avec success", "Info") } 
        
        );
    }

}