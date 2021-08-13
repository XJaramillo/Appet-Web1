import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
interface usuarioss {
  uid: string,
  nombre: string,
  apellido: string,
  urlimage: string,
  razones:{
    date: Date,
    razon: string
  }
}
export interface razon {
  date: Date;
  razon: string;
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  public userr: any;
  public razones: any =[];
  displayedColumns: string[] = ['fecha', 'razon'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public dialogRef: MatDialogRef<HistoryComponent>,@Inject(MAT_DIALOG_DATA) public user: usuarioss, private auth: AuthService) { }

  ngOnInit(): void {
    this.obtenerRazones(this.user.uid);
  }
  obtenerRazones(uid: string){
    this.auth.obtenerDatos(uid).subscribe(usa=>{
      const data2: usuarioss = usa.payload.data() as usuarioss;
      if(data2.razones==null){
        this.razones=[];
      }else{
        this.razones= data2.razones;
        this.listData = new MatTableDataSource(this.razones);
        this.listData.sort = this.sort;
        this.listData.paginator= this.paginator;
      }
    })
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
