import { User } from './../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {
    if (localStorage.getItem('username')) {
      this.currentUser = new User()
      this.currentUser.name = localStorage.getItem('name')
    }
  }

  private currentUser: any

  logOut(){
    localStorage.clear()
    location.reload()
    this.router.navigate(['/login'])
  }
}
