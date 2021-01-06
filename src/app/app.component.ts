import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService){}

  isLoging = false

  ngOnInit(){
    this.authService.authState()
    this.authService.isLogin$.subscribe((isLogin$)=>{
      this.isLoging = isLogin$
    })
  }

  logout(){
    this.authService.logout()
  }
}
