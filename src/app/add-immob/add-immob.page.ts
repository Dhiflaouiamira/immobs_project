import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-immob',
  templateUrl: './add-immob.page.html',
  styleUrls: ['./add-immob.page.scss'],
})
export class AddImmobPage {
  immobs!: Observable<any[]>;
  ImmobData ={
   Name:'',
   description:'',
   image:'',
   localisation:'',
   nb_pieces:'',
   price:''
  
  };
    constructor(
     public  firestore : AngularFirestore
    ) {
  
      this.immobs= this.firestore.collection("immobs").valueChanges();
  
    }
    addImmob(){
    this.firestore.collection('immobs').add(this.ImmobData);
    this.ImmobData ={
      Name:'',
      description:'',
      image:'',
      localisation:'',
      nb_pieces:'',
      price:''
     
     };
}

}