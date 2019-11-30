import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://webapp-191120202122.azurewebsites.net/api/v1/';
  constructor() { }
}
