import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: 'update-immob.page.html',
  styleUrls: ['update-immob.page.scss'],
})
export class UpdateImmobPage {
  immobId: string;
  immob: any;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) {
    this.immobId = this.route.snapshot.params['id'];
    this.getImmob(this.immobId);
  }

  getImmob(id: string) {
    this.firestore
      .collection('immobs')
      .doc(id)
      .valueChanges()
      .subscribe((data: any) => {
        this.immob = data;
      });
  }

  updateImmob() {
    this.firestore
      .collection('immobs')
      .doc(this.immobId)
      .update(this.immob)
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  }
}
