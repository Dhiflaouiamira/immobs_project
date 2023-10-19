import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

export interface Immob {
  name: string; 
  description: string;
  localisation: string;
  price: string;
  nb_pieces: string;
image:string;
  id?: string;
  image1:string;
  image2:string;
  image3:string;
  etat:String;
}

@Injectable({
  providedIn: 'root'
})
export class ImmobService {

  private _immobs = new BehaviorSubject<Immob[]>([]);

  get immobs() {
    return this._immobs.asObservable();
  }

  constructor(
    private firestore: Firestore,
  ) { }

  async addImmob(data: Immob) {
    try {
      const dataRef: any = collection(this.firestore, 'immobs');
      const response = await addDoc(dataRef, data);
      console.log(response);
      const id = await response?.id;
      const currentImmobs = this._immobs.value;
      let immobs: Immob[] = [{...data, id}];
      immobs = immobs.concat(currentImmobs);
      this._immobs.next(immobs);
      return immobs; 
    } catch(e) {
      throw(e);
    }
  }

  async getImmobs() {
    try {
      const dataRef: any = collection(this.firestore, 'immobs');
      const querySnapshot = await getDocs(dataRef);
      const immobs: Immob[] = await querySnapshot.docs.map((doc) => {
        let item: any = doc.data();
        item.id = doc.id;
        return item;
      });
      console.log('immobs: ', immobs);
      this._immobs.next(immobs);
      return immobs;
    } catch(e) {
      throw(e);
    }
  }

  async getImmobById(id: string) {
    try {
      const dataRef: any = doc(this.firestore, `immobs/${id}`);
      const docSnap = await getDoc(dataRef);
      if (docSnap.exists()) {
        // return docSnap.data() as Immob;
        let item: any = docSnap.data();
        item.id = docSnap.id;
        return {...item} as Immob;
      } else {
        console.log("No such document!");
        throw("No such document!");
      }
    } catch(e) {
      throw(e);
    }
  }

  async updateImmob(id: string, data: Immob) {
    try {
      const dataRef: any = doc(this.firestore, `immobs/${id}`);
      await updateDoc(dataRef, data);
      let currentImmobs = this._immobs.value;
      const index = currentImmobs.findIndex(x => x.id == id);
      const latestData = {id, ...data};
      currentImmobs[index] = latestData;
      this._immobs.next(currentImmobs);
      return latestData;
    } catch(e) {
      throw(e);
    }
  }

  async deleteImmob(id: string) {
    try {
      const dataRef: any = doc(this.firestore, `immobs/${id}`);
      await deleteDoc(dataRef);
      let currentImmobs = this._immobs.value;
      currentImmobs = currentImmobs.filter(x => x.id != id);
      this._immobs.next(currentImmobs);
    } catch(e) {
      throw(e);
    }
  }


}