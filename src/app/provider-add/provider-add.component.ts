import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent implements OnInit {
  
  provider: any;
  constructor(private service: ProvidersService, private router: Router, private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  createProvider(myform) { 
    this.service.createProvider(myform).subscribe(
      response => { 
        console.log(response); 
        this.router.navigate(['listCategorie']);
        this.notifyService.showSuccess("La Catégorie a été ajouté avec success", "Successfully")
      }); 
       }
}

