import { Injectable } from '@angular/core';
import { ArticuloAuditoriaI } from '../models/articuloAuditoria.interface';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticuloauditoriaService {

  private articuloAuditoriaCollection: AngularFirestoreCollection<ArticuloAuditoriaI>;
  private articulos: Observable<ArticuloAuditoriaI[]>;

  constructor(private afs: AngularFirestore) { 
    this.articuloAuditoriaCollection = afs.collection<ArticuloAuditoriaI>('articulosEliminados');
    this.articulos = this.articuloAuditoriaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      })
    );

  }

  getArticulosEliminados(): Observable<ArticuloAuditoriaI[]>{
    return this.articulos;
  }

  addArticuloEliminado(articulo: ArticuloAuditoriaI): Promise<DocumentReference>{
    return this.articuloAuditoriaCollection.add(articulo);
  }

}
