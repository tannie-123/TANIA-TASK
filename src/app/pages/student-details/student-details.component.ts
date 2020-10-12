import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import{NgForm}from '@angular/forms'
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
student:any;
items:[];
editstate:boolean=false;
itemToedit:DataTransferItem;
  constructor(public _data: DatabaseService, public  _route :ActivatedRoute){ }
  Addstudents(StudentsInfo: NgForm) {
    
    
    // add this to our database
    this._data.AddStudents(StudentsInfo.value);
  }

 // delete students
 DeleteStudents(ref) {
  this._data.deletestudents(ref);
}
// update students data
UpdateStudent(ref) {
  this._data.updatestudent(ref);
}

  ngOnInit() {

    // DISPLAY DATA

this._data.GetStudents().snapshotChanges().subscribe(action=>{
  console.log(action);
  this.student=action;
});

  }
  editItem(event,Item){
    this.editstate=true;
    this.itemToedit=Item;
  }
}
  

  

      //   if (this.student.name=="tania"){
      //     console.log('is available');
      //   }
      // })

   

// this.Ref=this._route.snapshot.paramMap.get('ref');
// console.log('Ref:',this.Ref);

// this.student=this._data.GetStudents();
// console.log(this.student);
// this._data.GetStudents().subscribe(e=>{
//   this.student=e['students']
//   console.log(this.student)
// })

// }
 

