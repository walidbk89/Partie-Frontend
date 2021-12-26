import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  provider: any; 

  urlProviders = environment.rootURL+'api/categories';

  constructor(private http:HttpClient) { }


  listProviders() { 
    return this.http.get(this.urlProviders + '/list');
   }

   createProvider(myform) { 
     this.provider = { 
       'code': myform.value.providerCode, 
       'libelle': myform.value.providerLibelle, 
      } 
      return this.http.post(this.urlProviders + '/add', this.provider); 
    } 

    updateProvider(myObj) { 
     return this.http.put(this.urlProviders + '/' + myObj['id'], myObj);
    }
      
    deleteProvider(myObj) {
      return this.http.delete(this.urlProviders + '/' + myObj['id'])
     } 
      
    getProvider(id) {
      return this.http.get(this.urlProviders + '/' + id) 
    }
}
