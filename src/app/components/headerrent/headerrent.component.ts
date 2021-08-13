import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerrent',
  templateUrl: './headerrent.component.html',
  styleUrls: ['./headerrent.component.css']
})
export class HeaderrentComponent implements OnInit {

  constructor(private AFauth: AngularFireAuth,private router: Router,) { }

  ngOnInit(): void {
  }
  logout(){
    this.AFauth.signOut().then(auth => {
      console.log('Sesion cerrada');
      this.router.navigate(['']);
    })
  }

}
