import { Component, OnInit } from '@angular/core';
import { Avatar } from '../entites';

import { ProvidersService } from '../services/providers.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  users: Avatar;
  constructor(private service: ProvidersService, private router: Router, private notifyService : NotificationService) { }


   //dtOptions: DataTables.Settings = {};
  providers: any;
  ngOnInit() {
    this.service.listProviders().subscribe(
      response => { this.providers = response; }
    );

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 2,
    //   lengthMenu: [[2, 5, 10, -1], [2, 5, 10, "All"]],
    //   processing: true
    // };
  }

  deleteProvider(myObj) {
    //console.log(this.provider); 
    this.service.deleteProvider(myObj).subscribe(
      response => {
        console.log(response);
        this.refreshListProviders();
        this.notifyService.showError("La Catégorie a été supprimé avec success", "Warning");
      })
  }


  refreshListProviders() { 
    this.service.listProviders().subscribe( 
      response => { this.providers = response; } ); 
    }


   updateProvider(myObj) { 
      this.router.navigate(['updateCategorie' + '/' + myObj['id']]); 
    }

}
