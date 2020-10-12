import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore';
import{ActivatedRoute}from'@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
items:any;
studentee:any;
  constructor(public _fire:AngularFirestore,public  _route :ActivatedRoute) { }
 
 
  // add students function

AddStudents(data){
 return this._fire.collection('students').add(data).then(results =>{

 console.log('successfully student added')
 }).catch(err=>{
   console.log('err occured:',err)
 });

}
// get data from firebase
GetStudents(){
 return this._fire.collection('students');

}
getSTUDENT(){
  return new Promise<any>((resolve, reject) => {
    this._fire.collection('students').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots)
    })
  })
}

// delete function
deletestudents(ref){
  this._fire.collection('students').doc(ref).delete().then(results=>{
    console.log('successfully deleted')
  }).catch(err=>{
    console.log('error occured,',err)
  });

}



updatestudent(ref){
  this._fire.collection('students').doc().update(this.items).then(results=>{
    console.log('sucessfully updated')
  }).catch(err=>{
console.log('error occured,',err)
  })
}
}  

