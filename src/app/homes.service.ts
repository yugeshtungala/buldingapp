import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomesService {

  constructor(private httpClient:HttpClient) { }
  getHomes(){
    return this.httpClient.get('assets/homes.json')
  }
}
