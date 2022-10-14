import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomingService {

  constructor() { 
    console.log('Welcome to our application');    
  }
}
