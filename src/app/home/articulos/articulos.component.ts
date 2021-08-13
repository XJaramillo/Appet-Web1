import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from 'src/app/components/confirmacion/confirmacion.component';
import { TaskI } from 'src/app/models/task.interface';
import { ArticulosService } from 'src/app/services/articulos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ArticuloauditoriaService } from 'src/app/services/articuloauditoria.service';
import { ArticuloAuditoriaI } from 'src/app/models/articuloAuditoria.interface';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: TaskI[];
  textoBuscar: String = '';
  fecha: any;
  razon: string;

  articulo: TaskI = {
    id: '',
    titulo: '',
    descripcion: '',
    img: '',
    telefono: '',
    costo: '',
    userId: '',
  }

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

  displayedColumns: string[] = ['Publicacion', 'Datos', 'Accion'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private articuloService: ArticulosService,
    public diag: MatDialog,
    private articuloAuditoriaService: ArticuloauditoriaService) { }

  ngOnInit(): void {
    this.articuloService.getArticulos().subscribe(res=> {
      this.articulos = res;
      console.log(this.articulos);
      this.listData = new MatTableDataSource(this.articulos);
      this.listData.paginator = this.paginator;
    });
    this.fecha = new Date();
  }

  eliminarArticulo(id): void {
    const dialogRef = this.diag.open(ConfirmacionComponent, {
      width: '250px',
      data: "Se eliminara este servicio, ¿Está seguro?"
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        const dialogRef = this.diag.open(DialogComponent, {
          width: '250px',
          data: "¿Por que desea eliminar este servicio?"
        });
        dialogRef.afterClosed().subscribe(res => {
          this.razon = res;
          if (this.razon) { 
            this.articuloService.getArticulo(id).subscribe(resarti=>{
              this.articuloAuditoria.id = resarti.id;
              this.articuloAuditoria.descripcion = resarti.descripcion;
              this.articuloAuditoria.img = resarti.img;
              this.articuloAuditoria.costo = resarti.costo;
              this.articuloAuditoria.userId = resarti.userId;
              this.articuloAuditoria.telefono = resarti.telefono;
              this.articuloAuditoria.titulo = resarti.titulo;
              this.articuloAuditoria.fechaEliminacion = this.fecha;
              this.articuloAuditoria.razon = this.razon;
              this.articuloAuditoriaService.addArticuloEliminado(this.articuloAuditoria).then(()=>{
                
                this.articuloService.deleteArticulo(id).then(()=>{
                  console.log("borrado");
                });
              });
            });
          }
        })
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.listData.filter = filterValue;
  }

}
