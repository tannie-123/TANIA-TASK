import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { analytics } from 'firebase';
import { Action } from 'rxjs/internal/scheduler/Action';
// import { DatabaseService } from './services/database.service';

import { Userdata } from './services/users';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FIREBASE';}
