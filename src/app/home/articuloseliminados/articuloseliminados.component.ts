import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticuloAuditoriaI } from 'src/app/models/articuloAuditoria.interface';
import { ArticuloauditoriaService } from 'src/app/services/articuloauditoria.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-articuloseliminados',
  templateUrl: './articuloseliminados.component.html',
  styleUrls: ['./articuloseliminados.component.css']
})
export class ArticuloseliminadosComponent implements OnInit {

  articulosEliminados: ArticuloAuditoriaI[];
  textoBuscar: String = '';
  fecha: any;
  razon: string;
  displayedColumns: string[] = ['Publicacion', 'Datos'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private articuloAuditoriaservice: ArticuloauditoriaService) {
    
   }

  ngOnInit(): void {
    this.cargarArticulo();
  }

  cargarArticulo(){
    this.articuloAuditoriaservice.getArticulosEliminados().subscribe(res=>{
      this.articulosEliminados = res;
      console.log(res);
      this.listData = new MatTableDataSource(this.articulosEliminados);
      this.listData.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.listData.filter = filterValue;
  }
}
