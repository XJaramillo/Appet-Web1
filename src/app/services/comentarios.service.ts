import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TaskI } from '../models/task.interface';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private comentarioCollection: AngularFirestoreCollection<TaskI>;
  private comentarios: Observable<TaskI[]>;

  constructor(private afs: AngularFirestore) {
    this.comentarioCollection = afs.collection<TaskI>('comentarios');
    this.comentarios = this.comentarioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      })
    );

  }

  getComentarios(): Observable<TaskI[]>{
    return this.comentarios;
  }

  getComentario(id: string): Observable<TaskI>{
    return this.comentarioCollection.doc<TaskI>(id).valueChanges().pipe(
      take(1),
      map(comentario=>{
        comentario.id = id;
        return comentario;
      })
    );
  }

  deleteComentario(id: string): Promise<void>{
    return this.comentarioCollection.doc(id).delete();
  }

  
}
