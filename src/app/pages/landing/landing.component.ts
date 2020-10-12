import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  student: any;
  name: any;
  constructor(public _data: DatabaseService) { }
  Addstudents(StudentsInfo: NgForm) {
    
    
    // add this to our database
    this._data.AddStudents(StudentsInfo.value);
  }

 

  ngOnInit() {

    // DISPLAY DATA

this._data.GetStudents().snapshotChanges().subscribe(action=>{
  console.log(action);
  this.student=action;
})
  }
}