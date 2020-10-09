import { Component } from '@angular/core';
import{NgForm}from '@angular/forms'
import { analytics } from 'firebase';
import { Action } from 'rxjs/internal/scheduler/Action';
import{DatabaseService}from './services/database.service';
import{Userdata}from './services/users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FIREBASE';
  student:any;
  constructor(public _data : DatabaseService){}
  Addstudents(StudentsInfo:NgForm){
// add this to our database
this._data.AddStudents(StudentsInfo.value)
  }

// delete students
DeleteStudents(ref){
 this._data.deletestudents(ref);
}
// update students data
UpdateStudent(){
  this._data.updatestudent();
}

ngOnInit(){

  // DISPLAY DATA
  this._data.GetStudents().snapshotChanges().subscribe(action=>{
      console.log(action);
      this.student =action;

      // action.map(element=>{
      //   const StudentsInfo=element as Userdata
      //   console.log(StudentsInfo.name

      
        })
      }



}
 

