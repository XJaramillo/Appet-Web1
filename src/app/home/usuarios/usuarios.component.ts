import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../components/dialog/dialog.component';
import {HistoryComponent} from '../../components/history/history.component';
import { ArticulosusuarioComponent } from '../../components/articulosusuario/articulosusuario.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
interface usuarioss {
  uid: string,
  nombre: string,
  apellido: string,
  urlimage: string,
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usersR : any =[];
  public ver: boolean;
  public uid: string;
  public mensaje: string;
  textobuscar='';
  public item= "correo";
  public ina= false;
  hideMe=false;
  razon: string;
  public usu: any = [];
  displayedColumns: string[] = ['Perfil', 'Datos','Cuenta','Usuario','Visualizar'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private auth: AuthService, public diag: MatDialog) { }

  ngOnInit(): void {
    this.opcionIna();
    
  }
  openDiagInha(nombre: string, apellido: string, uid: string, ver: boolean): void {
    this.ver = ver;
    this.uid = uid;
    if (ver == false || ver == null) {
      this.mensaje = "BLOQUEAR";
    } else {
      this.mensaje = "DESBLOQUEAR"
    }
    const dialogRef = this.diag.open(DialogComponent, {
      width: '250px',
      data: "Desea " + this.mensaje + " la cuenta del usuario:" + " " + nombre + " " + apellido
    });
    dialogRef.afterClosed().subscribe(res => {
      this.razon = res;
      if (this.razon) {
        this.auth.actualizarIn(this.uid, this.ver, this.razon);
        console.log(this.razon);
        this.ina = false;
      }
    })
  }
  openDiagAdmin(nombre: string, apellido: string, uid: string, ver: boolean): void {
    this.ver = ver;
    this.uid = uid;
    if (ver == false || ver == null) {
      this.mensaje = "sea";
    } else {
      this.mensaje = "deje de ser"
    }
    const dialogRef = this.diag.open(DialogComponent, {
      width: '250px',
      data: 'Desea que el usuario:' + nombre + " " + apellido + " " + this.mensaje + " ADMINISTRADOR",
    });
    dialogRef.afterClosed().subscribe(res => {
      this.razon = res;
      if (this.razon) {
        console.log(this.razon);
        this.auth.actualizarAdmin(this.uid, this.ver, this.razon);
      }
    })
  }
  

  openArticlesUse(user){
    console.log(user);
    const dialogRef = this.diag.open(ArticulosusuarioComponent,{
      width: '1500px',
      data: user
    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }

  opcionIna() {
    console.log(this.ina);
    this.usersR = [];
    if (this.ina == false) {
      this.usersR = [];
      this.auth.getUsers().subscribe(users => {
        this.usersR = users;
        const data2: usuarioss = this.usersR as usuarioss;
        if (data2 == null) {
          this.usu = [];
        } else {
          this.usu = data2;
          this.listData = new MatTableDataSource(this.usu);
          this.listData.paginator = this.paginator;
          console.log(this.listData);
        }
      });
    } else {
      console.log('entra al false');
      this.usersR = [];
      this.auth.getUsers().subscribe(users => {
        var cont = 0;
        for (let i = 0; i < users.length; i++) {
          if (users[i].inhabilitado == true) {
            this.usersR[cont] = users[i];
            cont++;
          }
        }
        const data2: usuarioss = this.usersR as usuarioss;
        if (data2 == null) {
          this.usu = [];
        } else {
          this.usu = data2;
          this.listData = new MatTableDataSource(this.usu);
          this.listData.paginator = this.paginator;
          console.log(this.listData);
        }
      });
    }

  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.listData.filter = filterValue;
  }
 

}