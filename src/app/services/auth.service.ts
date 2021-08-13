import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase';

interface user{
  uid: string,
  nombre: string,
  apellido: string,
  celular: string,
  correo: string, 
  img: string,
  admin: boolean,
  inhabilitado: boolean,
  razones:{
    date: Date,
    razon: string
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public v: boolean;
  public bloqueo: boolean;
  public admi: boolean;
  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }
  login(usuario: string, password: string) {
    //retorna promesa del usuario.
    return new Promise((resolve, rejected) => {
      //Logueo de usuario con email y password 
      this.AFauth.signInWithEmailAndPassword(usuario, password).then(user => {
        //Verificacion de cuenta verificada por email.
        this.AFauth.onAuthStateChanged(function (userv) {
          var emailVerificado = userv.emailVerified;
          if (emailVerificado == true) {
            resolve(user)
          } else {
            console.log("Email no verificado ");
          }
        })
      }).catch(err => rejected(err));
    })
  }
  obtenerDatos(uid){
    return this.db.collection('users').doc(uid).snapshotChanges();
  }
  getUsers(){
    return this.db.collection('users').snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a =>{
        const data: user =a.payload.doc.data() as user;
        data.uid= a.payload.doc.id;
        return data;
      })
    }));
  }
  actualizarIn(uid: string, inv: boolean, razon: string){
    if(inv==false || inv==null){
      this.db.collection('users').doc(uid).update({inhabilitado: true,razones: firestore.FieldValue.arrayUnion({
        razon:"Usuario Bloqueado por: "+razon,
        date: new Date()
      })});
    }else{
      this.db.collection('users').doc(uid).update({inhabilitado: false,razones: firestore.FieldValue.arrayUnion({
        razon:"Usuario desbloqueado por: "+razon,
        date: new Date()
      })});
      
    }
  }
  actualizarAdmin(uid: string, inv: boolean, razon: string){
    if(inv==false || inv==null){
      this.db.collection('users').doc(uid).update({admin: true, razones: firestore.FieldValue.arrayUnion({
        razon:"Usuario modificado como admin por: "+ razon,
        date: new Date()
      })});
    }else{
      this.db.collection('users').doc(uid).update({admin: false, razones: firestore.FieldValue.arrayUnion({
        razon:"Usuario dejo de ser admin por: "+ razon,
        date: new Date()
      })});
    }
  }
}
