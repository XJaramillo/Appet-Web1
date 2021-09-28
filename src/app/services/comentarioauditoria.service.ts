import { Injectable } from '@angular/core';
import { ComentarioAuditoriaI } from '../models/comentarioAuditoria.interface';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComentarioauditoriaService {

  private comentarioAuditoriaCollection: AngularFirestoreCollection<ComentarioAuditoriaI>;
  private comentarios: Observable<ComentarioAuditoriaI[]>;

  constructor(private afs: AngularFirestore) { 

    this.comentarios = this.comentarioAuditoriaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      })
    );

  }


}