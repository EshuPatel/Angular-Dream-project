import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyusersService {

  private url = 'https://reqres.in/api/users';
  private url1='https://jsonplaceholder.org/users';
  private url2='https://randomuser.me/api/?results=10'
  private apiKey = 'reqres-free-v1';


  //di of httpclient using consr.
  constructor(private httpClient: HttpClient) { }


  helloService() {
        return "Hello from Angular Service";
      }
      
      
  // ✅ API call to jsonplaceholder.org (no API key needed)
  getPlaceholderUsers() {
    return this.httpClient.get(this.url1);
  }
}
