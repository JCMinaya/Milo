import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user$: Observable<User>;
  public profilePhotoUrl: String;
  constructor(private afService:AngularFireAuth) { }

  ngOnInit() {
    this.user$ = this.afService.authState.pipe();
    this.user$.subscribe(r => this.profilePhotoUrl = r.photoURL);
  }

}
