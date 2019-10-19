import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://doowahdoo-capstone.herokuapp.com/api/v1/';
  constructor() { }
}
