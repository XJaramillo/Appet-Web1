/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentariosusuario',
  templateUrl: './comentariosusuario.component.html',
  styleUrls: ['./comentariosusuario.component.css']
})
export class ComentariosusuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

*/
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../../services/auth.service';
import { TaskI } from 'src/app/models/task.interface';
import { ArticulosService } from 'src/app/services/articulos.service';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ArticuloAuditoriaI } from 'src/app/models/articuloAuditoria.interface';
import { ArticuloauditoriaService } from 'src/app/services/articuloauditoria.service';


interface usuarioss {
  uid: string,
  nombre: string,
  apellido: string,
  urlimage: string,
  
  razones: {
    date: Date,
    razon: string
  }
}
export interface razon {
  date: Date;
  razon: string;
}

@Component({
  selector: 'app-comentariosusuario',
  templateUrl: './comentariosusuario.component.html',
  styleUrls: ['./comentariosusuario.component.css']
})
export class ComentariosusuarioComponent implements OnInit {

  articulo: TaskI = {
    id: '',
    titulo: '',
    descripcion: '',
    img: '',
    telefono: '',
    costo: '',
    userId: '',
  }

  articulos: TaskI[];
  razon: string;

  articuloAuditoria: ArticuloAuditoriaI = {
    id: '',
    titulo: '',
    descripcion: '',
    img: '',
    telefono: '',
    costo: '',
    userId: '',
    razon: ''
  }

  fecha: any;

  displayedColumns: string[] = ['Imagen', 'Titulo','Accion'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<ComentariosusuarioComponent>,
    private auth: AuthService,
    @Inject(MAT_DIALOG_DATA) public user: usuarioss,
    private articuloService: ArticulosService,
    private Authservice: AuthService,
    public diag: MatDialog,
    private articuloAuditoriaService: ArticuloauditoriaService) { }

  ngOnInit(): void {
    this.articulosUsuario();
    this.fecha = new Date();
  }

  onClickNo(): void {
    this.dialogRef.close();
  }

  articulosUsuario() {
    this.articuloService.getArticulos().subscribe(arti => {
      this.articulos = [];
      var cont = 0;
      for (let i = 0; i < arti.length; i++) {
        if (arti[i].userId == this.user.uid) {
          this.articulos[cont] = arti[i];
          cont++;
        }
      }
      console.log(this.articulos);
      this.listData = new MatTableDataSource(this.articulos);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }


  eliminarArticulo(id): void {

    const dialogRef = this.diag.open(ConfirmacionComponent, {
      width: '250px',
      data: "Se eliminara el servicio, esta seguro de la accion?"
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        const dialogRef = this.diag.open(DialogComponent, {
          width: '250px',
          data: "¿Ingrese el motivo de la eliminación del servicio?"
        });
        dialogRef.afterClosed().subscribe(res => {
          this.razon = res;
          if (this.razon) {
            this.articuloService.getArticulo(id).subscribe(resarti => {
              this.articuloAuditoria.id = resarti.id;
              this.articuloAuditoria.descripcion = resarti.descripcion;
              this.articuloAuditoria.img = resarti.img;
              this.articuloAuditoria.costo = resarti.costo;
              this.articuloAuditoria.userId = resarti.userId;
              this.articuloAuditoria.telefono = resarti.telefono;
              this.articuloAuditoria.titulo = resarti.titulo;
              this.articuloAuditoria.fechaEliminacion = this.fecha;
              this.articuloAuditoria.razon = this.razon;
              this.articuloAuditoriaService.addArticuloEliminado(this.articuloAuditoria).then(() => {

                this.articuloService.deleteArticulo(id).then(() => {
                  console.log("borrado");
                });

              });
            });
          }
        })
      }
    })
  }
}
