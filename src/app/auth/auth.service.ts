import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = ''
  isLogin$ = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }

  getToken(){
    return this.token
  }

  authState(){
    const token = localStorage.getItem('token')
    if(token){
      this.isLogin$.next(true)

    }else{
      this.isLogin$.next(false)
      this.router.navigate(['/login'])
    }

  }

  login(email:string,password:string){
//https://driver-friend.herokuapp.com
    this.http.post<{admin:any, token:string}>('http://localhost:3000/api/login', {email, password})
    .subscribe((data)=>{
      const {admin, token} = data
      this.isLogin$.next(true)
      this.token = token
      localStorage.setItem('token', token)
      this.router.navigate(['/'])

    })
  }

  logout(){
    this.isLogin$.next(false)
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
